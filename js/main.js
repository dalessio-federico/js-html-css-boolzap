var app = new Vue(
{
    el : "#app",
    
    data : 
    {   
        imgSrcPrew : "img/avatar",
        
        imgSrcLast : ".jpg",

        buddyIndex : 0,

        bell : 'fas fa-bell-slash',

        notificationStatus : "attiva",

        lastData : 0,

        message :"",
        
        user :
        {
            name: 'UserName',
            avatar: '_io',
            visible: true,
        },

        contacts: 
        [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
    },
    methods : 
    {
        activeNotification : function()
                            {
                                if(this.bell == "fas fa-bell")
                                {
                                    this.bell = "fas fa-bell-slash"
                                    this.notificationStatus = "attiva"
                                }
                                else if (this.bell == "fas fa-bell-slash")
                                {
                                    this.bell = "fas fa-bell"
                                    this.notificationStatus = "disattiva"
                                }
                            },

        sendMessagge : function()
                        {
                            const currentDate = new Date();
                            function minutes_with_leading_zeros(currentDate) 
                            { 
                                return (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
                            }

                            var newMessage =
                            {
                                date: currentDate.getDate() + '/' + currentDate.getMonth() + '/' + currentDate.getYear() + "  " + currentDate.getHours() + ":" + minutes_with_leading_zeros(currentDate) + ":" + currentDate.getSeconds(),
                                text: this.message,
                                status: "sent"
                            };

                            var recivedMessage =
                            {
                                date: currentDate.getDate() + '/' + currentDate.getMonth() + '/' + currentDate.getYear() + "  " + currentDate.getHours() + ":" + minutes_with_leading_zeros(currentDate) + ":" + currentDate.getSeconds(),
                                text: "ok",
                                status: "received"
                            };

                            this.contacts[this.buddyIndex].messages.push(newMessage);

                            setTimeout(() => this.contacts[this.buddyIndex].messages.push(recivedMessage) ,1000)
                            
                            this.message = "";
                        }
    }
});

