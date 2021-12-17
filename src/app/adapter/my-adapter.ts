import { ChatAdapter, IChatGroupAdapter, User, Group, Message, ChatParticipantStatus, ParticipantResponse, ParticipantMetadata, ChatParticipantType, IChatParticipant } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { delay, map } from "rxjs/operators";
import { ConfigService } from '../home.service';

export class MyAdapter extends ChatAdapter implements IChatGroupAdapter {

  constructor(private listGroups: ConfigService) {
    super();
  }

  public static mockedParticipants: IChatParticipant[] = [
    {
      participantType: ChatParticipantType.User,
      id: 1,
      displayName: "Speaking English with foreigner",
      avatar: "https://66.media.tumblr.com/avatar_9dd9bb497b75_128.pnj",
      status: ChatParticipantStatus.Online
    },
    // {
    //   participantType: ChatParticipantType.User,
    //   id: 2,
    //   displayName: "Economy",
    //   avatar: null,
    //   status: ChatParticipantStatus.Online
    // },
    {
      participantType: ChatParticipantType.User,
      id: 3,
      displayName: "python programming language",
      avatar: "https://68.media.tumblr.com/avatar_d28d7149f567_128.png",
      status: ChatParticipantStatus.Busy
    },
    {
      participantType: ChatParticipantType.User,
      id: 4,
      displayName: "Big data",
      avatar: "https://pbs.twimg.com/profile_images/600707945911844864/MNogF757_400x400.jpg",
      status: ChatParticipantStatus.Offline
    },
    {
      participantType: ChatParticipantType.User,
      id: 5,
      displayName: "Music",
      avatar: "https://pbs.twimg.com/profile_images/378800000449071678/27f2e27edd119a7133110f8635f2c130.jpeg",
      status: ChatParticipantStatus.Offline
    },
    {
      participantType: ChatParticipantType.User,
      id: 6,
      displayName: "Learning English with friends",
      avatar: "https://pbs.twimg.com/profile_images/378800000243930208/4fa8efadb63777ead29046d822606a57.jpeg",
      status: ChatParticipantStatus.Busy
    },
    {
      participantType: ChatParticipantType.User,
      id: 7,
      displayName: "Food and drink",
      avatar: "https://pbs.twimg.com/profile_images/3456602315/aad436e6fab77ef4098c7a5b86cac8e3.jpeg",
      status: ChatParticipantStatus.Busy
    },
    {
      participantType: ChatParticipantType.User,
      id: 8,
      displayName: "java programming language",
      avatar: "http://68.media.tumblr.com/avatar_ba75cbb26da7_128.png",
      status: ChatParticipantStatus.Offline
    },
    {
      participantType: ChatParticipantType.User,
      id: 9,
      displayName: "Data engineer",
      avatar: "http://pm1.narvii.com/6201/dfe7ad75cd32130a5c844d58315cbca02fe5b804_128.jpg",
      status: ChatParticipantStatus.Online
    }];

  listFriends(): Observable<ParticipantResponse[]> {
    // return of(MyAdapter.mockedParticipants.map(user => {
    //   let participantResponse = new ParticipantResponse();

    //   participantResponse.participant = user;
    //   participantResponse.metadata = {
    //     totalUnreadMessages: Math.floor(Math.random() * 10)
    //   }

    //   return participantResponse;
    // }));

    return this.listGroups.getConfigResponse().pipe(
      map(data => {
        return data.data.map(x => {
          let participantResponse = new ParticipantResponse()
          participantResponse.participant = {
            participantType: ChatParticipantType.User,
            id: x.group_id,
            displayName: x.group_name,
            avatar: "http://pm1.narvii.com/6201/dfe7ad75cd32130a5c844d58315cbca02fe5b804_128.jpg",
            status: ChatParticipantStatus.Online
          }

          return participantResponse;
        })
      })
    )
  }

  getMessageHistory(destinataryId: any): Observable<Message[]> {
    let mockedHistory: Array<Message>;

    mockedHistory = [
      {
        fromId: 1,
        toId: 999,
        message: "Hi there, just type any message bellow to test this Angular module.",
        dateSent: new Date()
      }
    ];

    return of(mockedHistory).pipe(delay(2000));
  }

  sendMessage(message: Message): void {
    setTimeout(() => {
      let replyMessage = new Message();

      replyMessage.message = "You have typed '" + message.message + "'";
      replyMessage.dateSent = new Date();

      if (isNaN(message.toId)) {
        let group = MyAdapter.mockedParticipants.find(x => x.id == message.toId) as Group;

        // Message to a group. Pick up any participant for this
        let randomParticipantIndex = Math.floor(Math.random() * group.chattingTo.length);
        replyMessage.fromId = group.chattingTo[randomParticipantIndex].id;

        replyMessage.toId = message.toId;

        this.onMessageReceived(group, replyMessage);
      }
      else {
        replyMessage.fromId = message.toId;
        replyMessage.toId = message.fromId;

        let user = MyAdapter.mockedParticipants.find(x => x.id == replyMessage.fromId);

        this.onMessageReceived(user, replyMessage);
      }
    }, 1000);
  }

  groupCreated(group: Group): void {
    MyAdapter.mockedParticipants.push(group);

    MyAdapter.mockedParticipants = MyAdapter.mockedParticipants.sort((first, second) =>
      second.displayName > first.displayName ? -1 : 1
    );

    // Trigger update of friends list
    this.listFriends().subscribe(response => {
      this.onFriendsListChanged(response);
    });
  }
}