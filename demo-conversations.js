/**
 * 演示对话数据文件
 * 用于demo录制，按顺序播放预设的对话内容
 */

// 演示对话数据结构
const DEMO_CONVERSATIONS = [
    {
        id: 1,
        query: {
            type: 'text',
            content: 'Set a lunch pill reminder at 11 AM and a water reminder every 2 hours. If I’m off the chair, ping my phone.'
        },
        response: {
            type: 'text_schedule_card',
            content: {
                text: 'Set. I\'ll alert on wheelchair first; if you\'re away, I\'ll push to your phone.',
                schedule_cards: [
                    {
                        id: 1,
                        title: 'Lunch Pill Reminder',
                        time: 'Daily 11:00 AM',
                        description: '♿️ Wheelchair alert → 📱 Phone backup',
                        type: 'reminder',
                        icon: '💊'
                    },
                    {
                        id: 2,
                        title: 'Water Reminder',
                        time: 'every 2 hours',
                        description: '♿️ Wheelchair alert → 📱 Phone backup',
                        type: 'reminder',
                        icon: '💧'
                    }
                ]
            }
        }
    },
    {
        id: 2,
        query: {
            type: 'text',
            content: 'Also set a prolonged\‑sitting alert at 60 minutes.'
        },
        response: {
            type: 'text_schedule_card',
            content: {
                text: 'Set. I\’ll nudge you gently and suggest simple in\‑chair moves.',
                schedule_cards: [
                    {
                        id: 1,
                        title: 'Prolonged\‑sitting Alert',
                        time: 'Sitting for 60 minutes',
                        location: 'On chair',
                        type: 'reminder',
                        icon: '💺'
                    }
                ]
            }
        }
    },
    {
        id: 3,
        query: {
            type: 'text',
            content: 'Can I make it to Dr. Patel\'s clinic and back today?'
        },
        response: {
            type: 'text_dual_card',
            content: {
                card1: {
                    title: 'Trip Analysis',
                    text: 'Round trip ≈ 4.6 miles. Battery 78% → safe, est. range ~12–14 miles. The clinic is open now, closes 6:00 PM, and Google marks an accessible entrance on Main St.',
                    icon: '🔋',
                    color: 'blue'
                },
                card2: {
                    title: 'Route Options',
                    text: 'Two ways to get there: Walk/Roll 2.3 miles via curb‑ramp crossings to the Main St accessible entrance; or Transit—Bus 5 in 6 minutes, elevators at Central Station, total 18 minutes.',
                    icon: '🗺️',
                    color: 'green'
                }
            }
        }
    },
    {
        id: 4,
        query: {
            type: 'text',
            content: 'Start walking route accessible preferred.'
        },
        response: {
            type: 'text_navigation_card',
            content: {
                text: 'Accessible routing on: curb ramps & elevators only, avoiding stairs and steep grades.',
                navigation_card: {
                    destination: 'Dr. Patel\'s Clinic',
                    address: '123 Main St, Downtown',
                    distance: '2.3 mi',
                    duration: '12 min',
                    route_type: 'Accessible',
                    icon: '🚌',
                    start_available: false
                }
            }
        }
    },

    // 主动提醒 - AI主动发起
    {
        id: 5,
        query: {
            type: 'ai_initiated',
            content: '' // AI主动发起，无用户输入
        },
        response: {
            type: 'reminder_card',
            content: {
                title: 'Lunch Pill Reminder',
                time: 'Now - 11:00 AM',
                description: 'Time to take your lunch pill',
                medication: 'Lunch pill',
                icon: '💊',
                urgent: true
            }
        }
    },
    
    // 用户确认提醒
    {
        id: 6,
        query: {
            type: 'text',
            content: 'Taken.'
        },
        response: {
            type: 'text_reminder_preview',
            content: {
                text: 'Great! Next water reminder at 1:00 PM, then every 2 hours.',
                next_reminder: {
                    title: 'Water Reminder',
                    time: 'Today 1:00 PM',
                    location: 'On wheelchair',
                    icon: '💧',
                    type: 'reminder'
                }
            }
        }
    },



    {
        id: 7,
        query: {
            type: 'image_text',
            image: {
                description: 'A cozy coffee shop storefront with large windows, outdoor seating, and a coffee sign',
                url: 'images/demo/menu.png', // 添加真实图片路径
                svg: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                    <!-- Building -->
                    <rect x="20" y="40" width="160" height="90" fill="#8B4513" stroke="#654321" stroke-width="2"/>
                    <!-- Windows -->
                    <rect x="30" y="50" width="30" height="25" fill="#87CEEB" stroke="#4682B4" stroke-width="1"/>
                    <rect x="70" y="50" width="30" height="25" fill="#87CEEB" stroke="#4682B4" stroke-width="1"/>
                    <rect x="110" y="50" width="30" height="25" fill="#87CEEB" stroke="#4682B4" stroke-width="1"/>
                    <rect x="150" y="50" width="30" height="25" fill="#87CEEB" stroke="#4682B4" stroke-width="1"/>
                    <!-- Door -->
                    <rect x="90" y="90" width="20" height="40" fill="#654321" stroke="#8B4513" stroke-width="1"/>
                    <circle cx="105" cy="110" r="1" fill="#FFD700"/>
                    <!-- Awning -->
                    <polygon points="15,85 185,85 180,75 20,75" fill="#DC143C"/>
                    <!-- Sign -->
                    <rect x="60" y="20" width="80" height="15" fill="#2F4F4F" rx="3"/>
                    <text x="100" y="30" text-anchor="middle" fill="white" font-size="8" font-family="Arial">COFFEE SHOP</text>
                    <!-- Outdoor seating -->
                    <circle cx="40" cy="120" r="8" fill="#8B4513"/>
                    <rect x="35" y="125" width="10" height="3" fill="#8B4513"/>
                    <circle cx="160" cy="120" r="8" fill="#8B4513"/>
                    <rect x="155" y="125" width="10" height="3" fill="#8B4513"/>
                    <!-- Coffee cup on table -->
                    <ellipse cx="40" cy="118" rx="3" ry="2" fill="white"/>
                    <ellipse cx="40" cy="117" rx="2" ry="1" fill="#8B4513"/>
                </svg>`
            },
            content: 'Help me pick something lighter—less sugar and salt'
        },
        response: {
            type: 'text',
            content: 'Two picks: ① Grilled turkey on whole\‑wheat + side salad (no dressing) — grilled/whole\‑grain; usually lower sodium/sweet sauce than a fried combo. ② Chicken noodle soup (cup) — broth\‑based; lighter than a bacon cheeseburger combo.'
        }
    },


    {
        id: 8,
        query: {
            type: 'image_text',
            image: {
                description: 'Two coffee packs; one has large "Decaf" text',
                url: 'images/demo/coffee decaf.png', // 添加真实图片路径
                svg: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                    <!-- Sky -->
                    <rect x="0" y="0" width="200" height="100" fill="#87CEEB"/>
                    <!-- Ground -->
                    <rect x="0" y="100" width="200" height="50" fill="#90EE90"/>
                    <!-- Trees -->
                    <circle cx="30" cy="80" r="20" fill="#228B22"/>
                    <rect x="28" y="90" width="4" height="20" fill="#8B4513"/>
                    <circle cx="170" cy="75" r="25" fill="#228B22"/>
                    <rect x="168" y="95" width="4" height="15" fill="#8B4513"/>
                    <!-- Bench -->
                    <rect x="80" y="105" width="40" height="3" fill="#8B4513"/>
                    <rect x="85" y="108" width="2" height="8" fill="#8B4513"/>
                    <rect x="113" y="108" width="2" height="8" fill="#8B4513"/>
                    <!-- Person -->
                    <circle cx="100" cy="95" r="5" fill="#FFDBAC"/>
                    <rect x="97" y="100" width="6" height="12" fill="#4169E1"/>
                    <rect x="99" y="112" width="2" height="8" fill="#000080"/>
                    <rect x="94" y="102" width="3" height="6" fill="#FFDBAC"/>
                    <rect x="103" y="102" width="3" height="6" fill="#FFDBAC"/>
                    <!-- Pigeons -->
                    <ellipse cx="90" cy="115" rx="3" ry="2" fill="#808080"/>
                    <circle cx="88" cy="114" r="1" fill="#808080"/>
                    <ellipse cx="110" cy="117" rx="3" ry="2" fill="#696969"/>
                    <circle cx="112" cy="116" r="1" fill="#696969"/>
                    <ellipse cx="105" cy="119" rx="2" ry="1" fill="#A9A9A9"/>
                    <circle cx="107" cy="118" r="0.5" fill="#A9A9A9"/>
                    <!-- Bread crumbs -->
                    <circle cx="92" cy="118" r="0.5" fill="#DEB887"/>
                    <circle cx="108" cy="120" r="0.5" fill="#DEB887"/>
                    <circle cx="95" cy="121" r="0.5" fill="#DEB887"/>
                </svg>`
            },
            content: 'For tonight, which coffee?'
        },
        response: {
            type: 'text',
            content: 'The Decaf on the right—easier on sleep and palpitations.'
        }
    },



    {
        id: 9,
        query: {
            type: 'image_text',
            image: {
                description: 'Zero Sugar soda vs regular',
                url: 'images/demo/cocakola.png', // 添加真实图片路径
                svg: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                    <!-- Sky -->
                    <rect x="0" y="0" width="200" height="100" fill="#87CEEB"/>
                    <!-- Ground -->
                    <rect x="0" y="100" width="200" height="50" fill="#90EE90"/>
                    <!-- Trees -->
                    <circle cx="30" cy="80" r="20" fill="#228B22"/>
                    <rect x="28" y="90" width="4" height="20" fill="#8B4513"/>
                    <circle cx="170" cy="75" r="25" fill="#228B22"/>
                    <rect x="168" y="95" width="4" height="15" fill="#8B4513"/>
                    <!-- Bench -->
                    <rect x="80" y="105" width="40" height="3" fill="#8B4513"/>
                    <rect x="85" y="108" width="2" height="8" fill="#8B4513"/>
                    <rect x="113" y="108" width="2" height="8" fill="#8B4513"/>
                    <!-- Person -->
                    <circle cx="100" cy="95" r="5" fill="#FFDBAC"/>
                    <rect x="97" y="100" width="6" height="12" fill="#4169E1"/>
                    <rect x="99" y="112" width="2" height="8" fill="#000080"/>
                    <rect x="94" y="102" width="3" height="6" fill="#FFDBAC"/>
                    <rect x="103" y="102" width="3" height="6" fill="#FFDBAC"/>
                    <!-- Pigeons -->
                    <ellipse cx="90" cy="115" rx="3" ry="2" fill="#808080"/>
                    <circle cx="88" cy="114" r="1" fill="#808080"/>
                    <ellipse cx="110" cy="117" rx="3" ry="2" fill="#696969"/>
                    <circle cx="112" cy="116" r="1" fill="#696969"/>
                    <ellipse cx="105" cy="119" rx="2" ry="1" fill="#A9A9A9"/>
                    <circle cx="107" cy="118" r="0.5" fill="#A9A9A9"/>
                    <!-- Bread crumbs -->
                    <circle cx="92" cy="118" r="0.5" fill="#DEB887"/>
                    <circle cx="108" cy="120" r="0.5" fill="#DEB887"/>
                    <circle cx="95" cy="121" r="0.5" fill="#DEB887"/>
                </svg>`
            },
            content: 'And these?'
        },
        response: {
            type: 'text',
            content: 'Zero Sugar—skip added sugar; taste\’s a bit different, but better for the evening.'
        }
    },


    {
        id: 10,
        query: {
            type: 'image_text',
            image: {
                description: 'Tomatoes, potatoes, and a tray labeled "Beef Stew Meat"',
                url: 'images/demo/tomato potato beef.png', // 添加真实图片路径
                svg: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                    <!-- Sky -->
                    <rect x="0" y="0" width="200" height="100" fill="#87CEEB"/>
                    <!-- Ground -->
                    <rect x="0" y="100" width="200" height="50" fill="#90EE90"/>
                    <!-- Trees -->
                    <circle cx="30" cy="80" r="20" fill="#228B22"/>
                    <rect x="28" y="90" width="4" height="20" fill="#8B4513"/>
                    <circle cx="170" cy="75" r="25" fill="#228B22"/>
                    <rect x="168" y="95" width="4" height="15" fill="#8B4513"/>
                    <!-- Bench -->
                    <rect x="80" y="105" width="40" height="3" fill="#8B4513"/>
                    <rect x="85" y="108" width="2" height="8" fill="#8B4513"/>
                    <rect x="113" y="108" width="2" height="8" fill="#8B4513"/>
                    <!-- Person -->
                    <circle cx="100" cy="95" r="5" fill="#FFDBAC"/>
                    <rect x="97" y="100" width="6" height="12" fill="#4169E1"/>
                    <rect x="99" y="112" width="2" height="8" fill="#000080"/>
                    <rect x="94" y="102" width="3" height="6" fill="#FFDBAC"/>
                    <rect x="103" y="102" width="3" height="6" fill="#FFDBAC"/>
                    <!-- Pigeons -->
                    <ellipse cx="90" cy="115" rx="3" ry="2" fill="#808080"/>
                    <circle cx="88" cy="114" r="1" fill="#808080"/>
                    <ellipse cx="110" cy="117" rx="3" ry="2" fill="#696969"/>
                    <circle cx="112" cy="116" r="1" fill="#696969"/>
                    <ellipse cx="105" cy="119" rx="2" ry="1" fill="#A9A9A9"/>
                    <circle cx="107" cy="118" r="0.5" fill="#A9A9A9"/>
                    <!-- Bread crumbs -->
                    <circle cx="92" cy="118" r="0.5" fill="#DEB887"/>
                    <circle cx="108" cy="120" r="0.5" fill="#DEB887"/>
                    <circle cx="95" cy="121" r="0.5" fill="#DEB887"/>
                </svg>`
            },
            content: 'What\’s a simple way to cook these tonight?'
        },
        response: {
            type: 'text',
            content: 'Two options: A Stewed beef with tomatoes and potatoes—quick sear, then water/broth; simmer 35\–45 min; go easy on salt. B Baked potatoes (200°C ~35\–40 min) + light tomato\‑beef soup (20\–30 min).'
        }
    },


    // {
    //     id: 11,  
    //     query: {
    //         type: 'text',
    //         content: 'I prefer the first one'
    //     },
    //     response: {
    //         type: 'text',
    //         content: 'Sounds good.'
    //     }
    // },

     // 主动久坐提醒 - AI主动发起
     {
        id: 11,
        query: {
            type: 'ai_initiated',
            content: '' // AI主动发起，无用户输入
        },
        response: {
            type: 'reminder_card',
            content: {
                title: 'Prolonged Sitting Alert',
                time: 'Now - 60 minutes seated',
                description: 'You\'ve been seated 60 minutes. If safe, do in-chair pressure relief: lean/tilt or 60-sec ankle pumps',
                medication: 'Movement reminder',
                icon: '💺',
                urgent: true
            }
        }
    },

    {
        id: 12,
        query: {
            type: 'text',
            content: 'Ok I\'ll do some ankle pumps.'
        },
        response: {
            type: 'text',
            content: 'Great!'
        }
    },


    // 兴趣爱好话题对话
    {
        id: 13,
        query: {
            type: 'text',
            content: 'What do you know about 1986 World Cup？'
        },
        response: {
            type: 'text',
            content: 'Quarterfinal at the Azteca, Argentina vs England (June 22): Maradona scored the “Hand of God,” then four minutes later the “Goal of the Century” with a 60\‑meter run past five defenders. Argentina won 2\–1 and later lifted the trophy. Want a 10\‑second recap? '
        }
    },



    {
        id: 14,
        query: {
            type: 'text',
            content: 'Give me the quick recap'
        },
        response: {
            type: 'text',
            content: '51\’ handball counted, 55\’ solo made it 2\–0, 81\’ Lineker pulled one back. That\’s why \’86 still lights up every football chat.'
        }
    },




    // {
    //     id: 16,
    //     query: {
    //         type: 'text',
    //         content: 'The last homer—neighbors shouted.'
    //     },
    //     response: {
    //         type: 'text',
    //         content: 'What a night—like a movie.'
    //     }
    // },



    //情感关怀
    {
        id: 15,
        query: {
            type: 'text',
            content: 'Feeling a bit tense today.'
        },
        response: {
            type: 'text',
            content: 'I\’m here. Want a one\‑liner or a short funny story? '
        }
    },


    {
        id: 16,
        query: {
            type: 'text',
            content: 'A one\‑liner. '
        },
        response: {
            type: 'text',
            content: 'Quick chuckle: my GPS said “recalculating”—I said “same,” and we both felt better. Got a tiny win from your day? '
        }
    },


    {
        id: 17,
        query: {
            type: 'text',
            content: 'My neighbor brought over soup.'
        },
        response: {
            type: 'text',
            content: 'That\’s five\‑star neighbor behavior. If you want another laugh, say “tell me a funny,” or say “good news” for a cheerful headline.'
        }
    },


    //回忆录
    {
        id: 18,
        query: {
            type: 'text',
            content: 'Start my memoir, In 1969 I moved to Chicago and… '
        },
        response: {
            type: 'text',
            content: 'Saved under “Memoir—1969 Chicago.” For a lively page, pick one: your first paycheck and what you bought, the funniest neighbor, or the first song on your radio.'
        }
    },

    {
        id: 19,
        query: {
            type: 'text',
            content: 'The first paycheck—I bought a second‑hand radio and it squeaked.'
        },
        response: {
            type: 'text',
            content: 'Nice. Which shop did you get it from, and where did you set it at home? '
        }
    },


    {
        id: 20,
        query: {
            type: 'text',
            content: 'From Maxwell Street Market. I set it on the kitchen counter. '
        },
        response: {
            type: 'text',
            content: 'Saved. One detail to bring it alive: what did you hear first—news, baseball, or a soul song? '
        }
    },


    {
        id: 21,
        query: {
            type: 'text',
            content: ' A Motown song, My Girl'
        },
        response: {
            type: 'text',
            content: 'Added. Next, would you like to capture your funniest neighbor or your first Chicago winter? Once I have all your details, I\’ll help weave them into a complete, chronological memoir.'
        }
    },

    //音乐播放
    {
        id: 22,
        query: {
            type: 'text',
            content: 'I\’m at the park in the shade—nice breeze today. Put on an oldies radio'
        },
        response: {
            type: 'music_card',
            content: {
                station: '60s/70s oldies radio',
                description: 'Easy vibe that suits the park.',
                status: 'Now Playing'
            }
        }
    },

    
   
    
    // // 主动提醒 - AI主动发起
    // {
    //     id: 10,
    //     query: {
    //         type: 'ai_initiated',
    //         content: '' // AI主动发起，无用户输入
    //     },
    //     response: {
    //         type: 'reminder_card',
    //         content: {
    //             title: 'Medication Reminder',
    //             time: 'Now - 8:00 AM',
    //             description: 'Time to take your morning medication',
    //             medication: 'Vitamin D + Calcium',
    //             icon: '💊',
    //             urgent: true
    //         }
    //     }
    // },
    
    // // 用户确认提醒
    // {
    //     id: 11,
    //     query: {
    //         type: 'text',
    //         content: 'Okay, I\'ve taken it'
    //     },
    //     response: {
    //         type: 'text_reminder_preview',
    //         content: {
    //             text: 'Great! Medication taken recorded. Here\'s your next reminder:',
    //             next_reminder: {
    //                 title: 'Physical Therapy Session',
    //                 time: 'Today 3:00 PM',
    //                 location: 'Rehabilitation Center',
    //                 icon: '🏃‍♂️',
    //                 type: 'appointment'
    //             }
    //         }
    //     }
    // },
    
    // // 路线导航对话
    // {
    //     id: 12,
    //     query: {
    //         type: 'text',
    //         content: 'Navigate to Central Library, I want to go there to read some books'
    //     },
    //     response: {
    //         type: 'text_navigation_card',
    //         content: {
    //             text: 'I found the best route to Central Library for you. The path is wheelchair accessible.',
    //             navigation_card: {
    //                 destination: 'Central Library',
    //                 address: '123 Main St, Downtown',
    //                 distance: '2.3 km',
    //                 duration: '12 min',
    //                 route_type: 'Accessible',
    //                 traffic: 'Light',
    //                 icon: '📚',
    //                 start_available: true
    //             }
    //         }
    //     }
    // },
    
    // 另一个日程对话 - 多个日程
    {
        id: 23,
        query: {
            type: 'text',
            content: 'What\'s my schedule for this week?'
        },
        response: {
            type: 'text_schedule_card',
            content: {
                text: 'Here\'s your schedule for this week:',
                schedule_cards: [
                    {
                        id: 3,
                        title: 'Physical Therapy',
                        time: 'Monday 10:00 AM',
                        location: 'Wellness Center',
                        type: 'therapy',
                        icon: '🏃‍♂️'
                    },
                    {
                        id: 4,
                        title: 'Family Dinner',
                        time: 'Wednesday 6:00 PM',
                        location: 'Home',
                        type: 'personal',
                        icon: '🍽️'
                    },
                    {
                        id: 5,
                        title: 'Grocery Shopping',
                        time: 'Friday 2:00 PM',
                        location: 'SuperMart',
                        type: 'errand',
                        icon: '🛒'
                    }
                ]
            }
        }
    }
];

// 当前对话索引
let currentConversationIndex = 0;

/**
 * 获取下一个演示对话
 * @returns {Object|null} 对话数据或null（如果已到末尾）
 */
function getNextDemoConversation() {
    if (currentConversationIndex >= DEMO_CONVERSATIONS.length) {
        return null; // 演示结束
    }
    
    const conversation = DEMO_CONVERSATIONS[currentConversationIndex];
    currentConversationIndex++;
    return conversation;
}

/**
 * 重置演示对话索引
 */
function resetDemoConversations() {
    currentConversationIndex = 0;
}

/**
 * 获取当前对话进度
 */
function getDemoProgress() {
    return {
        current: currentConversationIndex,
        total: DEMO_CONVERSATIONS.length,
        completed: currentConversationIndex >= DEMO_CONVERSATIONS.length
    };
}

// 导出函数（如果在模块环境中使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DEMO_CONVERSATIONS,
        getNextDemoConversation,
        resetDemoConversations,
        getDemoProgress
    };
}
