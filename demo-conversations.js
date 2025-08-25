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
            content: 'Hello, please tell me the current battery status of my wheelchair'
        },
        response: {
            type: 'text',
            content: 'Your wheelchair\'s current battery is at 85%, estimated to last 6 hours and 30 minutes, with a driving range of about 25 km. The wheelchair is in good overall condition with no abnormal faults.'
        }
    },
    {
        id: 2,
        query: {
            type: 'text',
            content: 'What wheelchair operations can I perform?'
        },
        response: {
            type: 'text',
            content: 'You can voice control wheelchair speed adjustment, lighting control, seat temperature adjustment, find wheelchair location, start navigation and more. You can also check battery level, view surroundings, set destinations, etc. Please let me know what help you need!'
        }
    },
    {
        id: 3,
        query: {
            type: 'text',
            content: 'Switch to navigation mode'
        },
        response: {
            type: 'text',
            content: 'Switched to navigation mode. Current speed: 2.5km/h. You can use voice commands to set destinations or get route information.'
        }
    },
    {
        id: 4,
        query: {
            type: 'image_text',
            image: {
                description: 'A cozy coffee shop storefront with large windows, outdoor seating, and a coffee sign',
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
            content: 'Navigate to this coffee shop please'
        },
        response: {
            type: 'text',
            content: 'I can see the coffee shop location in your image. Setting up navigation to the coffee shop. The route is approximately 1.2 km away, estimated arrival time is 8 minutes at current speed. Navigation started.'
        }
    },
    {
        id: 5,
        query: {
            type: 'text',
            content: 'Play some relaxing music'
        },
        response: {
            type: 'music_card',
            content: {
                station: 'Smooth Jazz Cafe',
                description: 'Relaxing instrumental jazz music',
                status: 'Now Playing'
            }
        }
    },
    {
        id: 6,
        query: {
            type: 'image_text',
            image: {
                description: 'A person in a park feeding pigeons, with trees and benches around',
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
            content: 'What do you see in this scene?'
        },
        response: {
            type: 'text',
            content: 'I can see a peaceful park scene where someone is feeding pigeons. There are trees, a bench, and several pigeons gathering around for the food. It looks like a lovely, quiet moment in nature. Would you like me to navigate to a nearby park where you could enjoy a similar experience?'
        }
    },
    {
        id: 7,
        query: {
            type: 'text',
            content: 'Switch to classical music'
        },
        response: {
            type: 'music_card',
            content: {
                station: 'Classical Harmony',
                description: 'Beautiful classical compositions',
                status: 'Now Playing'
            }
        }
    },
    {
        id: 8,
        query: {
            type: 'text',
            content: 'Battery is running low'
        },
        response: {
            type: 'text',
            content: 'Low battery alert received. Current battery level: 23%. I recommend finding a charging station soon. There are 2 charging stations within 800 meters. Would you like me to navigate to the nearest one?'
        }
    },
    
    // 日程提醒类型对话
    {
        id: 9,
        query: {
            type: 'text',
            content: 'Schedule a doctor appointment for tomorrow at 2 PM and remind me to take medication at 8 AM'
        },
        response: {
            type: 'text_schedule_card',
            content: {
                text: 'I\'ve scheduled your appointments and set up the reminders for you.',
                schedule_cards: [
                    {
                        id: 1,
                        title: 'Doctor Appointment',
                        time: 'Tomorrow 2:00 PM',
                        location: 'City Medical Center',
                        type: 'appointment',
                        icon: '🏥'
                    },
                    {
                        id: 2,
                        title: 'Medication Reminder',
                        time: 'Daily 8:00 AM',
                        description: 'Take morning medication',
                        type: 'reminder',
                        icon: '💊'
                    }
                ]
            }
        }
    },
    
    // 主动提醒 - AI主动发起
    {
        id: 10,
        query: {
            type: 'ai_initiated',
            content: '' // AI主动发起，无用户输入
        },
        response: {
            type: 'reminder_card',
            content: {
                title: 'Medication Reminder',
                time: 'Now - 8:00 AM',
                description: 'Time to take your morning medication',
                medication: 'Vitamin D + Calcium',
                icon: '💊',
                urgent: true
            }
        }
    },
    
    // 用户确认提醒
    {
        id: 11,
        query: {
            type: 'text',
            content: 'Okay, I\'ve taken it'
        },
        response: {
            type: 'text_reminder_preview',
            content: {
                text: 'Great! Medication taken recorded. Here\'s your next reminder:',
                next_reminder: {
                    title: 'Physical Therapy Session',
                    time: 'Today 3:00 PM',
                    location: 'Rehabilitation Center',
                    icon: '🏃‍♂️',
                    type: 'appointment'
                }
            }
        }
    },
    
    // 路线导航对话
    {
        id: 12,
        query: {
            type: 'text',
            content: 'Navigate to Central Library, I want to go there to read some books'
        },
        response: {
            type: 'text_navigation_card',
            content: {
                text: 'I found the best route to Central Library for you. The path is wheelchair accessible.',
                navigation_card: {
                    destination: 'Central Library',
                    address: '123 Main Street, Downtown',
                    distance: '2.3 km',
                    duration: '12 minutes',
                    route_type: 'Wheelchair Accessible',
                    traffic: 'Light traffic',
                    icon: '📚',
                    start_available: true
                }
            }
        }
    },
    
    // 另一个日程对话 - 多个日程
    {
        id: 13,
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
