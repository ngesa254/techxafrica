// // import ZaraChatInterface from '../../component/ZaraChatInterface';

// // export default function ZaraPage() {
// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <ZaraChatInterface />
// //     </div>
// //   );
// // }


// 'use client';

// import React, { useState, useMemo, useRef, useEffect } from 'react';
// import { 
//   PanelLeft, 
//   Plus, 
//   Search, 
//   Brain, 
//   Mic, 
//   Sparkles, 
//   Clock, 
//   ChevronDown,
//   Bell,
//   Paperclip,
//   ChevronUp,
//   Send,
//   FileText, 
//   Wifi, 
//   Mail, 
//   Handshake,
//   Briefcase, 
//   Headphones, 
//   BookOpen, 
//   Package, 
//   Users, 
//   Tag, 
//   UserCog, 
//   BarChart, 
//   Lightbulb, 
//   Heart,
//   Settings
// } from 'lucide-react';

// // Custom SVG Icons
// const ThumbsUpIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
//   <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L9 9.5v2.3A4 4 0 007.28 15H5a2 2 0 01-2-2v-6c0-1.1.9-2 2-2h2.192a5 5 0 00.904-1.652z" />
//   </svg>
// );

// const ThumbsDownIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
//   <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L15 14.5v-2.3A4 4 0 0116.72 9H19a2 2 0 012 2v6c0 1.1-.9 2-2 2h-2.192a5 5 0 00-.904 1.652z" />
//   </svg>
// );

// const CopyIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
//   <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
//   </svg>
// );

// const ShareIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
//   <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
//   </svg>
// );

// const RefreshIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
//   <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//   </svg>
// );

// const InfoIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
//   <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//   </svg>
// );

// const GeneratingIcon = () => (
//   <svg 
//     xmlns="http://www.w3.org/2000/svg" 
//     width="49" 
//     height="48" 
//     viewBox="0 0 49 48" 
//     fill="none"
//     style={{
//       width: '48.296px',
//       height: '47.696px',
//       animation: 'pulseIcon 1.5s infinite ease-in-out',
//     }}
//   >
//     <rect 
//       x="13.4004" 
//       y="23.8018" 
//       width="15.2" 
//       height="15.2" 
//       rx="3" 
//       transform="rotate(-45 13.4004 23.8018)" 
//       fill="url(#paint0_linear_3318_22237_loader)"
//     />
//     <defs>
//       <linearGradient 
//         id="paint0_linear_3318_22237_loader" 
//         x1="13.4004" 
//         y1="31.4018" 
//         x2="28.6004" 
//         y2="31.4018" 
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#02E773"/>
//         <stop offset="0.256033" stopColor="#1BA8BC"/>
//         <stop offset="0.411703" stopColor="#1CB6B6"/>
//         <stop offset="0.571125" stopColor="#2DB989"/>
//         <stop offset="0.72867" stopColor="#57C969"/>
//         <stop offset="0.875" stopColor="#07DC80"/>
//         <stop offset="1" stopColor="#03E774"/>
//       </linearGradient>
//     </defs>
//   </svg>
// );

// // Multi-stage loading component
// const MultiStageLoader = ({ stage }: { stage: string }) => {
//   const getStageContent = () => {
//     switch (stage) {
//       case 'analyzing':
//         return { text: 'Analyzing...', showSkeleton: false };
//       case 'thinking':
//         return { text: 'Thinking...', showSkeleton: false };
//       case 'generating':
//         return { text: 'Generating...', showSkeleton: true };
//       default:
//         return { text: 'Processing...', showSkeleton: false };
//     }
//   };

//   const { text, showSkeleton } = getStageContent();
//   const barWidths = ['60%', '95%', '100%', '75%', '50%'];

//   return (
//     <>
//       <style jsx>{`
//         @keyframes shimmer {
//           0% { background-position: 200% 0; }
//           100% { background-position: -200% 0; }
//         }
        
//         @keyframes pulseIcon {
//           0%, 100% { 
//             transform: scale(1); 
//             opacity: 1; 
//           }
//           50% { 
//             transform: scale(0.9); 
//             opacity: 0.7; 
//           }
//         }
//       `}</style>
      
//       <div style={{
//         display: 'flex',
//         width: '100%',
//         maxWidth: '100%',
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//         gap: '12px',
//       }}>
//         {showSkeleton && (
//           <div style={{
//             display: 'flex',
//             width: '100%',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//             gap: '12px',
//           }}>
//             {barWidths.map((width, index) => (
//               <div
//                 key={index}
//                 style={{
//                   height: '20px',
//                   borderRadius: '10px',
//                   background: 'linear-gradient(90deg, #02E773, #1CB6B6, #02E773)',
//                   backgroundSize: '200% 100%',
//                   animation: 'shimmer 2s infinite linear',
//                   width: width,
//                 }}
//               />
//             ))}
//           </div>
//         )}

//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px',
//           marginTop: showSkeleton ? '20px' : '0',
//           position: 'relative',
//           zIndex: 1,
//         }}>
//           <GeneratingIcon />
//           <span style={{ fontSize: '14px', color: '#333', fontWeight: '400' }}>{text}</span>
//         </div>
//       </div>
//     </>
//   );
// };

// interface Message {
//   id: number;
//   text: string;
//   sender: 'user' | 'ai';
//   timestamp: string;
// }

// // Enterprise-Grade AI Chat Interface
// const EnterpriseAIChatInterface = ({ initialQuery, onBack }: { initialQuery?: string; onBack?: () => void }) => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputValue, setInputValue] = useState('');
//   const [loadingStage, setLoadingStage] = useState<string | null>(null);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, loadingStage]);

//   useEffect(() => {
//     if (initialQuery) {
//       handleSendMessage(initialQuery);
//     }
//   }, [initialQuery]);

//   const handleSendMessage = async (queryText: string | null = null) => {
//     const messageText = queryText || inputValue;
//     if (!messageText.trim() || loadingStage) return;

//     const userMessage: Message = {
//       id: Date.now(),
//       text: messageText,
//       sender: 'user',
//       timestamp: new Date().toLocaleTimeString()
//     };

//     setMessages(prev => [...prev, userMessage]);
//     if (!queryText) setInputValue('');

//     // Multi-stage loading sequence
//     setLoadingStage('analyzing');
    
//     setTimeout(() => {
//       setLoadingStage('thinking');
      
//       setTimeout(() => {
//         setLoadingStage('generating');
        
//         setTimeout(() => {
//           const aiMessage: Message = {
//             id: Date.now() + 1,
//             text: 'Sure, here is a summarized table showing the amount of float totals in all the regions as of 12, April 2025 11:59:59.',
//             sender: 'ai',
//             timestamp: new Date().toLocaleTimeString()
//           };

//           setMessages(prev => [...prev, aiMessage]);
//           setLoadingStage(null);
//         }, 2000 + Math.random() * 1000);
//       }, 1000 + Math.random() * 1000);
//     }, 1000 + Math.random() * 1000);
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const handleQuickQuestion = (question: string) => {
//     setInputValue(question);
//     setTimeout(() => handleSendMessage(), 100);
//   };

//   return (
//     <div style={{ 
//       width: '100%',
//       maxWidth: '1400px',
//       margin: '0 auto', 
//       padding: '20px',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       height: '100vh',
//       display: 'flex',
//       flexDirection: 'column'
//     }}>
//       <div style={{
//         flex: 1,
//         backgroundColor: '#ffffff',
//         padding: '20px',
//         overflowY: 'auto',
//         minHeight: '400px',
//         maxHeight: '500px',
//         borderRadius: '12px',
//         border: '1px solid #e9ecef',
//         width: '100%'
//       }}>
//         {messages.map((message) => (
//           <div key={message.id} style={{
//             display: 'flex',
//             justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
//             marginBottom: '16px'
//           }}>
//             {message.sender === 'user' ? (
//               <div style={{
//                 display: 'flex',
//                 padding: '16px',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 gap: '10px',
//                 borderRadius: '32px 0px 32px 32px',
//                 border: '1px solid #D0D5DD',
//                 background: '#FFF',
//                 maxWidth: '70%',
//                 color: '#333',
//                 fontSize: '14px',
//                 lineHeight: '1.4'
//               }}>
//                 <div style={{ flex: 1 }}>{message.text}</div>
//                 <div style={{
//                   fontSize: '12px',
//                   color: '#666',
//                   marginTop: '4px',
//                   whiteSpace: 'nowrap'
//                 }}>
//                   {message.timestamp}
//                 </div>
//               </div>
//             ) : (
//               <div style={{ width: '100%', maxWidth: '100%' }}>
//                 <div style={{ backgroundColor: '#f8fafc', padding: '20px 0', borderRadius: '12px' }}>
//                   <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 16px' }}>
//                     <p style={{ color: '#374151', fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
//                       {message.text}
//                     </p>

//                     <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '24px', maxWidth: '768px', margin: '0 auto' }}>
//                       <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>Agent Float Data</h2>
                      
//                       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//                         <thead>
//                           <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
//                             <th style={{ textAlign: 'left', padding: '8px 16px', fontSize: '14px', color: '#6b7280', fontWeight: '400' }}>Region</th>
//                             <th style={{ textAlign: 'center', padding: '8px 16px', fontSize: '14px', color: '#6b7280', fontWeight: '400' }}>Agents</th>
//                             <th style={{ textAlign: 'center', padding: '8px 16px', fontSize: '14px', color: '#6b7280', fontWeight: '400' }}>Float</th>
//                           </tr>
//                         </thead>
                        
//                         <tbody>
//                           {[
//                             { region: 'Western', agents: '123,924', float: '123,924' },
//                             { region: 'Nyanza', agents: '123,924', float: '123,924' },
//                             { region: 'Nairobi West', agents: '123,924', float: '123,924' }
//                           ].map((row, index) => (
//                             <tr key={index} style={{ borderBottom: index !== 2 ? '1px solid #e5e7eb' : 'none' }}>
//                               <td style={{ padding: '12px 16px', color: '#374151', fontSize: '14px' }}>{row.region}</td>
//                               <td style={{ padding: '12px 16px', color: '#1f2937', fontSize: '14px', textAlign: 'right' }}>{row.agents}</td>
//                               <td style={{ padding: '12px 16px', color: '#1f2937', fontSize: '14px', textAlign: 'right' }}>{row.float}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>

//                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', maxWidth: '768px', margin: '16px auto 0' }}>
//                       <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
//                         <button style={{ color: '#6b7280', cursor: 'pointer', backgroundColor: 'transparent', border: 'none', padding: '4px' }}>
//                           <ThumbsUpIcon style={{ width: '20px', height: '20px' }} />
//                         </button>
//                         <button style={{ color: '#6b7280', cursor: 'pointer', backgroundColor: 'transparent', border: 'none', padding: '4px' }}>
//                           <ThumbsDownIcon style={{ width: '20px', height: '20px' }} />
//                         </button>
//                         <button style={{ color: '#6b7280', cursor: 'pointer', backgroundColor: 'transparent', border: 'none', padding: '4px' }}>
//                           <CopyIcon style={{ width: '20px', height: '20px' }} />
//                         </button>
//                         <button style={{ color: '#6b7280', cursor: 'pointer', backgroundColor: 'transparent', border: 'none', padding: '4px' }}>
//                           <ShareIcon style={{ width: '20px', height: '20px' }} />
//                         </button>
//                         <button style={{ color: '#6b7280', cursor: 'pointer', backgroundColor: 'transparent', border: 'none', padding: '4px' }}>
//                           <RefreshIcon style={{ width: '20px', height: '20px' }} />
//                         </button>
//                       </div>

//                       <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', backgroundColor: '#eff6ff', border: '1px solid #3b82f6', borderRadius: '6px', color: '#1d4ed8', fontSize: '12px', cursor: 'pointer' }}>
//                         <InfoIcon style={{ width: '16px', height: '16px' }} />
//                         <span>Please double-check AI content to confirm accuracy</span>
//                       </button>
//                     </div>

//                     <div style={{ marginTop: '32px', maxWidth: '768px', margin: '32px auto 0' }}>
//                       <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>More related to this topic</h3>
                      
//                       <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//                         {[
//                           'Agent with the highest float amount.',
//                           'Agent with the lowest float amount.',
//                           'Total float amount countrywide.'
//                         ].map((topic, index) => (
//                           <button
//                             key={index}
//                             onClick={() => handleQuickQuestion(topic)}
//                             style={{
//                               width: '100%',
//                               textAlign: 'left',
//                               padding: '12px 16px',
//                               backgroundColor: 'white',
//                               border: '1px solid #4ade80',
//                               borderRadius: '6px',
//                               color: '#1f2937',
//                               fontSize: '14px',
//                               cursor: 'pointer',
//                               transition: 'all 0.2s ease'
//                             }}
//                             onMouseEnter={(e) => {
//                               e.currentTarget.style.backgroundColor = '#f0fdf4';
//                               e.currentTarget.style.borderColor = '#22c55e';
//                             }}
//                             onMouseLeave={(e) => {
//                               e.currentTarget.style.backgroundColor = 'white';
//                               e.currentTarget.style.borderColor = '#4ade80';
//                             }}
//                           >
//                             {topic}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div style={{
//                   fontSize: '12px',
//                   color: '#666',
//                   marginTop: '8px',
//                   textAlign: 'center'
//                 }}>
//                   {message.timestamp}
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}

//         {loadingStage && (
//           <div style={{
//             display: 'flex',
//             justifyContent: 'flex-start',
//             marginBottom: '16px',
//             width: '100%'
//           }}>
//             <div style={{ width: '100%', maxWidth: '100%' }}>
//               <div style={{ backgroundColor: '#f8fafc', padding: '20px 0', borderRadius: '12px', width: '100%' }}>
//                 <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 16px' }}>
//                   <MultiStageLoader stage={loadingStage} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         <div ref={messagesEndRef} />
//       </div>

//       <div style={{
//         display: 'flex',
//         padding: '24px',
//         justifyContent: 'space-between',
//         alignItems: 'flex-end',
//         borderRadius: '24px',
//         border: '1px solid #D0D5DD',
//         background: '#FFF',
//         marginTop: '20px'
//       }}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyPress={handleKeyPress}
//           placeholder="Ask me anything..."
//           disabled={!!loadingStage}
//           style={{
//             color: loadingStage ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.25)',
//             fontFamily: '"Futura Md BT", system-ui, -apple-system, sans-serif',
//             fontSize: '16px',
//             fontWeight: '400',
//             lineHeight: '120%',
//             letterSpacing: '-0.32px',
//             border: 'none',
//             outline: 'none',
//             backgroundColor: 'transparent',
//             flex: 1,
//             minHeight: '19.2px'
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// // Navigation items
// const navItems = [
//   { id: 'ai-search', label: 'AI Search', icon: Search },
//   { id: 'brain', label: 'Brain', icon: Brain },
//   { id: 'live', label: 'Live', icon: Mic },
//   { id: 'agentverse', label: 'AgentVerse', icon: Sparkles },
//   { id: 'history', label: 'History', icon: Clock, hasDropdown: true },
// ];

// // AI Search Interface Component
// const AISearchInterface = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showKazuriButton, setShowKazuriButton] = useState(false);
//   const [showChatInterface, setShowChatInterface] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const value = e.target.value;
//     setSearchQuery(value);
//     setShowKazuriButton(value.trim().length > 0);
//   };

//   const handleKazuriSearch = () => {
//     if (searchQuery.trim()) {
//       setShowChatInterface(true);
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey && searchQuery.trim()) {
//       e.preventDefault();
//       handleKazuriSearch();
//     }
//   };

//   if (showChatInterface) {
//     return <EnterpriseAIChatInterface initialQuery={searchQuery} onBack={() => setShowChatInterface(false)} />;
//   }

//   return (
//     <div style={{
//       flex: 1,
//       backgroundColor: '#f9fafb',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '24px',
//       position: 'relative',
//       overflow: 'hidden',
//       height: '100%'
//     }}>
//       <div style={{ width: '100%', maxWidth: '512px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
//         <div style={{
//           marginBottom: '32px',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: '12px'
//         }}>
//           <h1 style={{
//             color: '#1D2939',
//             textAlign: 'center',
//             fontFamily: '"Futura Bk BT", sans-serif',
//             fontSize: '32px',
//             fontWeight: 400,
//             lineHeight: '100%',
//             marginBottom: '12px'
//           }}>
//             Hello, Peter
//           </h1>
//           <h2 style={{
//             textAlign: 'center',
//             fontFamily: '"Futura Md BT", sans-serif',
//             fontSize: '48px',
//             fontWeight: 400,
//             lineHeight: '60px',
//             letterSpacing: '-0.96px',
//             background: 'linear-gradient(90deg, #02E773 0%, #1BA8BC 25.6%, #1CB6B6 41.17%, #2DB989 57.11%, #57C969 72.87%, #07DC80 87.5%, #03E774 100%)',
//             backgroundClip: 'text',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent'
//           }}>
//             What's the mission today?
//           </h2>
//         </div>

//         <div style={{
//           position: 'relative',
//           display: 'flex',
//           height: '160px',
//           padding: '24px',
//           justifyContent: 'space-between',
//           alignItems: 'flex-end',
//           borderRadius: '24px',
//           border: '1px solid #D0D5DD',
//           background: '#FFF'
//         }}>
//           <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//             <div style={{ position: 'relative', marginBottom: '16px' }}>
//               <textarea
//                 value={searchQuery}
//                 onChange={handleInputChange}
//                 onKeyDown={handleKeyPress}
//                 placeholder="Ask me anything"
//                 style={{
//                   backgroundColor: 'transparent',
//                   outline: 'none',
//                   resize: 'none',
//                   position: 'relative',
//                   zIndex: 10,
//                   width: '100%',
//                   border: 'none',
//                   color: '#374151',
//                   fontFamily: '"Futura Md BT", sans-serif',
//                   fontSize: '16px',
//                   fontWeight: 400,
//                   lineHeight: '120%',
//                   letterSpacing: '-0.32px'
//                 }}
//                 rows={3}
//               />
//             </div>
            
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                 <button style={{ padding: '8px', backgroundColor: 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.2s' }}>
//                   <Paperclip style={{ width: '20px', height: '20px', color: '#6b7280' }} />
//                 </button>
//                 <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: 'transparent', cursor: 'pointer', transition: 'background-color 0.2s', fontSize: '14px' }}>
//                   <Brain style={{ width: '16px', height: '16px', color: '#6b7280' }} />
//                   <span style={{ color: '#374151' }}>Brain</span>
//                 </button>
//               </div>

//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 {!showKazuriButton && (
//                   <button style={{ padding: '8px', borderRadius: '8px', transition: 'all 0.2s', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#6b7280' }}>
//                     <Mic style={{ width: '20px', height: '20px' }} />
//                   </button>
//                 )}

//                 {showKazuriButton && (
//                   <button
//                     onClick={handleKazuriSearch}
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '8px',
//                       color: 'white',
//                       transition: 'all 0.2s',
//                       transform: 'scale(1)',
//                       padding: '8px 14px',
//                       borderRadius: '8px',
//                       border: '1px solid #02E773',
//                       background: 'linear-gradient(90deg, #02E773 0%, #1BA8BC 25.6%, #1CB6B6 41.17%, #2DB989 57.11%, #57C969 72.87%, #07DC80 87.5%, #03E774 100%)',
//                       boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
//                       cursor: 'pointer'
//                     }}
//                   >
//                     <span style={{ fontWeight: 500, fontSize: '14px' }}>Ask Kazuri</span>
//                     <Send style={{ width: '16px', height: '16px' }} />
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Sidebar Component
// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [activeItemId, setActiveItemId] = useState('ai-search');
//   const [isHistoryOpen, setIsHistoryOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const handleNavItemClick = (itemId: string) => {
//     if (itemId === 'history') {
//       setIsHistoryOpen(!isHistoryOpen);
//     } else {
//       setActiveItemId(itemId);
//     }
//   };

//   const renderMainContent = () => {
//     switch (activeItemId) {
//       case 'ai-search':
//         return <AISearchInterface />;
      
//       case 'brain':
//         return (
//           <div style={{ flex: 1, padding: '32px', background: 'linear-gradient(135deg, #f3e8ff 0%, #e0e7ff 100%)' }}>
//             <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
//               <Brain size={80} style={{ margin: '0 auto 16px', color: '#7c3aed' }} />
//               <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>Brain AI Assistant</h2>
//               <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>Advanced AI reasoning and analysis capabilities</p>
//             </div>
//           </div>
//         );
      
//       case 'live':
//         return (
//           <div style={{ flex: 1, padding: '32px', background: 'linear-gradient(135deg, #fef2f2 0%, #fdf2f8 100%)' }}>
//             <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
//               <Mic size={80} style={{ margin: '0 auto 16px', color: '#dc2626' }} />
//               <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>Live Communication</h2>
//               <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>Real-time voice and audio interactions</p>
//             </div>
//           </div>
//         );
      
//       case 'agentverse':
//         return (
//           <div style={{ flex: 1, padding: '32px', backgroundColor: '#f9fafb' }}>
//             <div style={{ maxWidth: '1536px', margin: '0 auto' }}>
//               <div style={{ textAlign: 'center', marginBottom: '32px' }}>
//                 <h1 style={{
//                   fontSize: '2.5rem',
//                   fontWeight: 'bold',
//                   marginBottom: '16px',
//                   background: 'linear-gradient(90deg, #02E773 0%, #1BA8BC 25.6%, #1CB6B6 41.17%, #2DB989 57.11%, #57C969 72.87%, #07DC80 87.5%, #03E774 100%)',
//                   backgroundClip: 'text',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent'
//                 }}>
//                   AgentVerse
//                 </h1>
//                 <p style={{ color: '#6b7280' }}>Meet your new AI Teammates</p>
//               </div>

//               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
//                 {[
//                   { name: 'Network Analysis', desc: 'Monitor network performance', icon: Wifi },
//                   { name: 'Customer Support', desc: 'Handle customer inquiries', icon: Users },
//                   { name: 'Sales Assistant', desc: 'Boost your sales performance', icon: Briefcase },
//                   { name: 'HR Helper', desc: 'Streamline HR processes', icon: UserCog },
//                   { name: 'Financial Advisor', desc: 'Optimize financial operations', icon: BarChart },
//                   { name: 'Product Guide', desc: 'Discover perfect products', icon: Package }
//                 ].map((agent, index) => (
//                   <div key={index} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb', transition: 'box-shadow 0.2s', cursor: 'pointer' }}>
//                     <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
//                       <div style={{ width: '48px', height: '48px', backgroundColor: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>
//                         <agent.icon style={{ width: '24px', height: '24px', color: '#16a34a' }} />
//                       </div>
//                       <div>
//                         <h3 style={{ fontWeight: 600, color: '#1f2937' }}>{agent.name}</h3>
//                         <p style={{ fontSize: '14px', color: '#6b7280' }}>{agent.desc}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );
      
//       default:
//         return (
//           <div style={{ flex: 1, padding: '32px' }}>
//             <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
//               <h2 style={{
//                 fontSize: '2.5rem',
//                 fontWeight: 'bold',
//                 background: 'linear-gradient(90deg, #16a34a 0%, #0891b2 100%)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 marginBottom: '16px'
//               }}>
//                 Welcome to GURU-AI
//               </h2>
//               <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '32px' }}>
//                 Your intelligent work assistant powered by advanced AI
//               </p>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f9fafb', overflow: 'hidden' }}>
//       <div 
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//           flexShrink: 0,
//           height: '100vh',
//           transition: 'all 0.3s ease-in-out',
//           zIndex: 10,
//           overflow: 'hidden',
//           width: isCollapsed ? '80px' : '240px',
//           borderRight: '1px solid #EAECF0',
//           background: '#FFF'
//         }}
//       >
//         <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
//           <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
//             <button
//               onClick={toggleSidebar}
//               style={{
//                 padding: '8px',
//                 backgroundColor: 'transparent',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 transition: 'background-color 0.2s',
//                 minWidth: '32px',
//                 minHeight: '32px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//             >
//               <PanelLeft size={20} style={{ color: '#374151' }} />
//             </button>
//           </div>

//           <div style={{ transition: 'all 0.3s', opacity: isCollapsed ? 0 : 1, height: isCollapsed ? 0 : 'auto', overflow: 'hidden' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//               <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '8px' }}>
//                 <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>S</span>
//               </div>
//               <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#22c55e' }}>Zara</span>
//             </div>
//           </div>

//           {isCollapsed && (
//             <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
//               <button 
//                 style={{
//                   background: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)',
//                   padding: '0.5px',
//                   borderRadius: '8px',
//                   border: 'none',
//                   cursor: 'pointer',
//                   transition: 'all 0.2s',
//                   minWidth: '40px',
//                   minHeight: '40px'
//                 }}
//               >
//                 <div style={{ backgroundColor: 'white', padding: '12px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                   <Plus size={20} style={{ color: '#22c55e' }} />
//                 </div>
//               </button>
//             </div>
//           )}

//           {!isCollapsed && (
//             <div style={{ width: '100%' }}>
//               <div style={{ background: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)', padding: '0.5px', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s' }}>
//                 <button style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', padding: '12px 16px', textAlign: 'left', backgroundColor: 'white', borderRadius: '6px', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}>
//                   <Plus size={18} style={{ color: '#22c55e', flexShrink: 0 }} />
//                   <span style={{ color: '#16a34a', fontWeight: 500 }}>New chat</span>
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         <nav style={{
//           flex: 1,
//           display: 'flex',
//           padding: '0px 16px',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//           gap: '4px',
//           alignSelf: 'stretch'
//         }}>
//           <ul style={{
//             width: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '4px',
//             alignItems: 'flex-start',
//             alignSelf: 'stretch'
//           }}>
//             {navItems.map((item) => {
//               const IconComponent = item.icon;
//               const isActive = activeItemId === item.id;
              
//               return (
//                 <li key={item.id} style={{ width: '100%' }}>
//                   <button
//                     onClick={() => handleNavItemClick(item.id)}
//                     style={{
//                       width: '100%',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '12px',
//                       padding: '12px',
//                       borderRadius: '6px',
//                       transition: 'all 0.2s',
//                       alignSelf: 'stretch',
//                       border: 'none',
//                       cursor: 'pointer',
//                       backgroundColor: isActive ? '#dcfce7' : 'transparent',
//                       borderLeft: isActive ? '4px solid #22c55e' : '4px solid transparent',
//                       color: isActive ? '#15803d' : '#374151'
//                     }}
//                   >
//                     <IconComponent 
//                       size={20} 
//                       style={{ color: isActive ? '#16a34a' : '#6b7280' }} 
//                     />
                    
//                     <span style={{
//                       fontWeight: 500,
//                       transition: 'all 0.3s',
//                       opacity: isCollapsed ? 0 : 1,
//                       width: isCollapsed ? 0 : 'auto',
//                       overflow: 'hidden',
//                       flex: 1
//                     }}>
//                       {item.label}
//                     </span>

//                     {item.hasDropdown && !isCollapsed && (
//                       <ChevronDown 
//                         size={16} 
//                         style={{
//                           color: '#9ca3af',
//                           transition: 'transform 0.2s',
//                           transform: isHistoryOpen ? 'rotate(180deg)' : 'rotate(0deg)'
//                         }}
//                       />
//                     )}
//                   </button>

//                   {item.id === 'history' && isHistoryOpen && !isCollapsed && (
//                     <div style={{ marginLeft: '24px', marginTop: '4px', transition: 'all 0.3s' }}>
//                       <ul style={{ gap: '4px', borderLeft: '1px solid #e5e7eb', paddingLeft: '16px' }}>
//                         <li>
//                           <button style={{ width: '100%', textAlign: 'left', padding: '8px 12px', fontSize: '14px', color: '#6b7280', backgroundColor: 'transparent', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s' }}>
//                             Recent Conversations
//                           </button>
//                         </li>
//                         <li>
//                           <button style={{ width: '100%', textAlign: 'left', padding: '8px 12px', fontSize: '14px', color: '#6b7280', backgroundColor: 'transparent', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s' }}>
//                             Last Week
//                           </button>
//                         </li>
//                         <li>
//                           <button style={{ width: '100%', textAlign: 'left', padding: '8px 12px', fontSize: '14px', color: '#6b7280', backgroundColor: 'transparent', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s' }}>
//                             Archive
//                           </button>
//                         </li>
//                       </ul>
//                     </div>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
      
//       {renderMainContent()}
//     </div>
//   );
// };

// export default function ZaraPage() {
//   return <Sidebar />;
// }



'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  PanelLeft, 
  Plus, 
  Search, 
  SlidersHorizontal,
  Mic, 
  Sparkles, 
  Clock, 
  ChevronDown,
  Bell,
  Paperclip,
  ChevronUp,
  Send,
  FileText, 
  Wifi, 
  Mail, 
  Handshake,
  Briefcase, 
  Headphones, 
  BookOpen, 
  Package, 
  Users, 
  Tag, 
  UserCog, 
  BarChart, 
  Lightbulb, 
  Heart,
  Settings
} from 'lucide-react';

// Custom SVG Icons
const ThumbsUpIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L9 9.5v2.3A4 4 0 007.28 15H5a2 2 0 01-2-2v-6c0-1.1.9-2 2-2h2.192a5 5 0 00.904-1.652z" />
  </svg>
);

const ThumbsDownIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L15 14.5v-2.3A4 4 0 0116.72 9H19a2 2 0 012 2v6c0 1.1-.9 2-2 2h-2.192a5 5 0 00-.904 1.652z" />
  </svg>
);

const CopyIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const ShareIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
);

const RefreshIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const InfoIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const GeneratingIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="49" 
    height="48" 
    viewBox="0 0 49 48" 
    fill="none"
    style={{
      width: '48.296px',
      height: '47.696px',
      animation: 'pulseIcon 1.5s infinite ease-in-out',
    }}
  >
    <rect 
      x="13.4004" 
      y="23.8018" 
      width="15.2" 
      height="15.2" 
      rx="3" 
      transform="rotate(-45 13.4004 23.8018)" 
      fill="url(#paint0_linear_3318_22237_loader)"
    />
    <defs>
      <linearGradient 
        id="paint0_linear_3318_22237_loader" 
        x1="13.4004" 
        y1="31.4018" 
        x2="28.6004" 
        y2="31.4018" 
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#02E773"/>
        <stop offset="0.256033" stopColor="#1BA8BC"/>
        <stop offset="0.411703" stopColor="#1CB6B6"/>
        <stop offset="0.571125" stopColor="#2DB989"/>
        <stop offset="0.72867" stopColor="#57C969"/>
        <stop offset="0.875" stopColor="#07DC80"/>
        <stop offset="1" stopColor="#03E774"/>
      </linearGradient>
    </defs>
  </svg>
);

// Multi-stage loading component
const MultiStageLoader = ({ stage }: { stage: string }) => {
  const getStageContent = () => {
    switch (stage) {
      case 'analyzing':
        return { text: 'Analyzing...', showSkeleton: false };
      case 'thinking':
        return { text: 'Thinking...', showSkeleton: false };
      case 'generating':
        return { text: 'Generating...', showSkeleton: true };
      default:
        return { text: 'Processing...', showSkeleton: false };
    }
  };

  const { text, showSkeleton } = getStageContent();
  const barWidths = ['60%', '95%', '100%', '75%', '50%'];

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        @keyframes pulseIcon {
          0%, 100% { 
            transform: scale(1); 
            opacity: 1; 
          }
          50% { 
            transform: scale(0.9); 
            opacity: 0.7; 
          }
        }
      `}</style>
      
      <div style={{
        display: 'flex',
        width: '100%',
        maxWidth: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px',
      }}>
        {showSkeleton && (
          <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '12px',
          }}>
            {barWidths.map((width, index) => (
              <div
                key={index}
                style={{
                  height: '20px',
                  borderRadius: '10px',
                  background: 'linear-gradient(90deg, #02E773, #1CB6B6, #02E773)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s infinite linear',
                  width: width,
                }}
              />
            ))}
          </div>
        )}

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: showSkeleton ? '20px' : '0',
          position: 'relative',
          zIndex: 1,
        }}>
          <GeneratingIcon />
          <span style={{ fontSize: '14px', color: '#333', fontWeight: '400' }}>{text}</span>
        </div>
      </div>
    </>
  );
};

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

// Enterprise-Grade AI Chat Interface
const EnterpriseAIChatInterface = ({ initialQuery, onBack }: { initialQuery?: string; onBack?: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loadingStage, setLoadingStage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loadingStage]);

  useEffect(() => {
    if (initialQuery) {
      handleSendMessage(initialQuery);
    }
  }, [initialQuery]);

  const handleSendMessage = async (queryText: string | null = null) => {
    const messageText = queryText || inputValue;
    if (!messageText.trim() || loadingStage) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    if (!queryText) setInputValue('');

    // Multi-stage loading sequence
    setLoadingStage('analyzing');
    
    setTimeout(() => {
      setLoadingStage('thinking');
      
      setTimeout(() => {
        setLoadingStage('generating');
        
        setTimeout(() => {
          const aiMessage: Message = {
            id: Date.now() + 1,
            text: 'Sure, here is a summarized table showing the amount of float totals in all the regions as of 12, April 2025 11:59:59.',
            sender: 'ai',
            timestamp: new Date().toLocaleTimeString()
          };

          setMessages(prev => [...prev, aiMessage]);
          setLoadingStage(null);
        }, 2000 + Math.random() * 1000);
      }, 1000 + Math.random() * 1000);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <div style={{ 
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        flex: 1,
        backgroundColor: '#ffffff',
        padding: '20px',
        overflowY: 'auto',
        minHeight: '400px',
        maxHeight: '500px',
        borderRadius: '12px',
        border: '1px solid #e9ecef',
        width: '100%'
      }}>
        {messages.map((message) => (
          <div key={message.id} style={{
            display: 'flex',
            justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
            marginBottom: '16px'
          }}>
            {message.sender === 'user' ? (
              <div style={{
                display: 'flex',
                padding: '16px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '32px 0px 32px 32px',
                border: '1px solid #D0D5DD',
                background: '#FFF',
                maxWidth: '70%',
                color: '#333',
                fontSize: '14px',
                lineHeight: '1.4'
              }}>
                <div style={{ flex: 1 }}>{message.text}</div>
                <div style={{
                  fontSize: '12px',
                  color: '#666',
                  marginTop: '4px',
                  whiteSpace: 'nowrap'
                }}>
                  {message.timestamp}
                </div>
              </div>
            ) : (
              <div style={{ width: '100%', maxWidth: '100%' }}>
                <div style={{ backgroundColor: '#f8fafc', padding: '20px 0', borderRadius: '12px' }}>
                  <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 16px' }}>
                    <p style={{ color: '#374151', fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
                      {message.text}
                    </p>

                    <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '24px', maxWidth: '768px', margin: '0 auto' }}>
                      <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>Agent Float Data</h2>
                      
                      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                          <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                            <th style={{ textAlign: 'left', padding: '8px 16px', fontSize: '14px', color: '#6b7280', fontWeight: '400' }}>Region</th>
                            <th style={{ textAlign: 'center', padding: '8px 16px', fontSize: '14px', color: '#6b7280', fontWeight: '400' }}>Agents</th>
                            <th style={{ textAlign: 'center', padding: '8px 16px', fontSize: '14px', color: '#6b7280', fontWeight: '400' }}>Float</th>
                          </tr>
                        </thead>
                        
                        <tbody>
                          {[
                            { region: 'Western', agents: '123,924', float: '123,924' },
                            { region: 'Nyanza', agents: '123,924', float: '123,924' },
                            { region: 'Nairobi West', agents: '123,924', float: '123,924' }
                          ].map((row, index) => (
                            <tr key={index} style={{ borderBottom: index !== 2 ? '1px solid #e5e7eb' : 'none' }}>
                              <td style={{ padding: '12px 16px', color: '#374151', fontSize: '14px' }}>{row.region}</td>
                              <td style={{ padding: '12px 16px', color: '#1f2937', fontSize: '14px', textAlign: 'right' }}>{row.agents}</td>
                              <td style={{ padding: '12px 16px', color: '#1f2937', fontSize: '14px', textAlign: 'right' }}>{row.float}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', maxWidth: '768px', margin: '16px auto 0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <button style={{ color: '#6b7280', cursor: 'pointer', backgroundColor: 'transparent', border: 'none', padding: '4px' }}>
                          <ThumbsUpIcon style={{ width: '20px', height: '20px' }} />
                        </button>
                        <button style={{ color: '#6b7280', cursor: 'pointer', backgroundColor: 'transparent', border: 'none', padding: '4px' }}>
                          <ThumbsDownIcon style={{ width: '20px', height: '20px' }} />
                        </button>
                        <button style={{ color: '#6b7280', cursor: 'pointer', backgroundColor: 'transparent', border: 'none', padding: '4px' }}>
                          <CopyIcon style={{ width: '20px', height: '20px' }} />
                        </button>
                        <button style={{ color: '#6b7280', cursor: 'pointer', backgroundColor: 'transparent', border: 'none', padding: '4px' }}>
                          <ShareIcon style={{ width: '20px', height: '20px' }} />
                        </button>
                        <button style={{ color: '#6b7280', cursor: 'pointer', backgroundColor: 'transparent', border: 'none', padding: '4px' }}>
                          <RefreshIcon style={{ width: '20px', height: '20px' }} />
                        </button>
                      </div>

                      <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', backgroundColor: '#eff6ff', border: '1px solid #3b82f6', borderRadius: '6px', color: '#1d4ed8', fontSize: '12px', cursor: 'pointer' }}>
                        <InfoIcon style={{ width: '16px', height: '16px' }} />
                        <span>Please double-check AI content to confirm accuracy</span>
                      </button>
                    </div>

                    <div style={{ marginTop: '32px', maxWidth: '768px', margin: '32px auto 0' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>More related to this topic</h3>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {[
                          'Agent with the highest float amount.',
                          'Agent with the lowest float amount.',
                          'Total float amount countrywide.'
                        ].map((topic, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuickQuestion(topic)}
                            style={{
                              width: '100%',
                              textAlign: 'left',
                              padding: '12px 16px',
                              backgroundColor: 'white',
                              border: '1px solid #4ade80',
                              borderRadius: '6px',
                              color: '#1f2937',
                              fontSize: '14px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f0fdf4';
                              e.currentTarget.style.borderColor = '#22c55e';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'white';
                              e.currentTarget.style.borderColor = '#4ade80';
                            }}
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div style={{
                  fontSize: '12px',
                  color: '#666',
                  marginTop: '8px',
                  textAlign: 'center'
                }}>
                  {message.timestamp}
                </div>
              </div>
            )}
          </div>
        ))}

        {loadingStage && (
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginBottom: '16px',
            width: '100%'
          }}>
            <div style={{ width: '100%', maxWidth: '100%' }}>
              <div style={{ backgroundColor: '#f8fafc', padding: '20px 0', borderRadius: '12px', width: '100%' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 16px' }}>
                  <MultiStageLoader stage={loadingStage} />
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div style={{
        display: 'flex',
        padding: '24px',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderRadius: '24px',
        border: '1px solid #D0D5DD',
        background: '#FFF',
        marginTop: '20px'
      }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything..."
          disabled={!!loadingStage}
          style={{
            color: loadingStage ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.25)',
            fontFamily: '"Futura Md BT", system-ui, -apple-system, sans-serif',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '120%',
            letterSpacing: '-0.32px',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            flex: 1,
            minHeight: '19.2px'
          }}
        />
      </div>
    </div>
  );
};

// Navigation items
const navItems = [
  { id: 'history', label: 'History', icon: Clock, hasDropdown: true },
];

// AI Search Interface Component
const AISearchInterface = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showKazuriButton, setShowKazuriButton] = useState(false);
  const [showChatInterface, setShowChatInterface] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowKazuriButton(value.trim().length > 0);
  };

  const handleKazuriSearch = () => {
    if (searchQuery.trim()) {
      setShowChatInterface(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && searchQuery.trim()) {
      e.preventDefault();
      handleKazuriSearch();
    }
  };

  if (showChatInterface) {
    return <EnterpriseAIChatInterface initialQuery={searchQuery} onBack={() => setShowChatInterface(false)} />;
  }

  return (
    <div style={{
      flex: 1,
      backgroundColor: '#f9fafb',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden',
      height: '100%'
    }}>
      <div style={{ width: '100%', maxWidth: '512px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{
          marginBottom: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}>
          <h1 style={{
            color: '#1D2939',
            textAlign: 'center',
            fontFamily: '"Futura Bk BT", sans-serif',
            fontSize: '32px',
            fontWeight: 400,
            lineHeight: '100%',
            marginBottom: '12px'
          }}>
            Hello, Lydia
          </h1>
          <h2 style={{
            textAlign: 'center',
            fontFamily: '"Futura Md BT", sans-serif',
            fontSize: '48px',
            fontWeight: 400,
            lineHeight: '60px',
            letterSpacing: '-0.96px',
            background: 'linear-gradient(90deg, #02E773 0%, #1BA8BC 25.6%, #1CB6B6 41.17%, #2DB989 57.11%, #57C969 72.87%, #07DC80 87.5%, #03E774 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
           Ready when you are.
          </h2>
        </div>

        <div style={{
          position: 'relative',
          display: 'flex',
          height: '160px',
          padding: '24px',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderRadius: '24px',
          border: '1px solid #D0D5DD',
          background: '#FFF'
        }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', marginBottom: '16px' }}>
              <textarea
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Ask me anything"
                style={{
                  backgroundColor: 'transparent',
                  outline: 'none',
                  resize: 'none',
                  position: 'relative',
                  zIndex: 10,
                  width: '100%',
                  border: 'none',
                  color: '#374151',
                  fontFamily: '"Futura Md BT", sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '120%',
                  letterSpacing: '-0.32px'
                }}
                rows={3}
              />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button style={{ padding: '8px', backgroundColor: 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.2s' }}>
                  <Paperclip style={{ width: '20px', height: '20px', color: '#6b7280' }} />
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: 'transparent', cursor: 'pointer', transition: 'background-color 0.2s', fontSize: '14px' }}>
                  <SlidersHorizontal style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                  <span style={{ color: '#374151' }}>Tools</span>
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                {!showKazuriButton && (
                  <button style={{ padding: '8px', borderRadius: '8px', transition: 'all 0.2s', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#6b7280' }}>
                    <Mic style={{ width: '20px', height: '20px' }} />
                  </button>
                )}

                {showKazuriButton && (
                  <button
                    onClick={handleKazuriSearch}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'white',
                      transition: 'all 0.2s',
                      transform: 'scale(1)',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      border: '1px solid #02E773',
                      background: 'linear-gradient(90deg, #02E773 0%, #1BA8BC 25.6%, #1CB6B6 41.17%, #2DB989 57.11%, #57C969 72.87%, #07DC80 87.5%, #03E774 100%)',
                      boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ fontWeight: 500, fontSize: '14px' }}>Ask Zara</span>
                    <Send style={{ width: '16px', height: '16px' }} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Sidebar Component
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItemId, setActiveItemId] = useState('default');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [showChatInterface, setShowChatInterface] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavItemClick = (itemId: string) => {
    if (itemId === 'history') {
      setIsHistoryOpen(!isHistoryOpen);
    } else {
      setActiveItemId(itemId);
    }
  };

  const handleNewChat = () => {
    setShowChatInterface(true);
  };

  const handleBackToHistory = () => {
    setShowChatInterface(false);
  };

  const renderMainContent = () => {
    if (showChatInterface) {
      return <EnterpriseAIChatInterface onBack={handleBackToHistory} />;
    }

    switch (activeItemId) {
      case 'history':
        return (
          <div style={{ flex: 1, padding: '32px', backgroundColor: '#f9fafb' }}>
            <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
              <Clock size={80} style={{ margin: '0 auto 16px', color: '#6b7280' }} />
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>Conversation History</h2>
              <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>Your past conversations and chat history</p>
            </div>
          </div>
        );
      
      default:
        return <AISearchInterface />;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f9fafb', overflow: 'hidden' }}>
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flexShrink: 0,
          height: '100vh',
          transition: 'all 0.3s ease-in-out',
          zIndex: 10,
          overflow: 'hidden',
          width: isCollapsed ? '80px' : '240px',
          borderRight: '1px solid #EAECF0',
          background: '#FFF'
        }}
      >
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={toggleSidebar}
              style={{
                padding: '8px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                minWidth: '32px',
                minHeight: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <PanelLeft size={20} style={{ color: '#374151' }} />
            </button>
          </div>

          <div style={{ transition: 'all 0.3s', opacity: isCollapsed ? 0 : 1, height: isCollapsed ? 0 : 'auto', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#22c55e' }}>Zara</span>
            </div>
          </div>

          {isCollapsed && (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <button 
                onClick={handleNewChat}
                style={{
                  background: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)',
                  padding: '0.5px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  minWidth: '40px',
                  minHeight: '40px'
                }}
              >
                <div style={{ backgroundColor: 'white', padding: '12px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Plus size={20} style={{ color: '#22c55e' }} />
                </div>
              </button>
            </div>
          )}

          {!isCollapsed && (
            <div style={{ width: '100%' }}>
              <div style={{ background: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)', padding: '0.5px', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s' }}>
                <button 
                  onClick={handleNewChat}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', padding: '12px 16px', textAlign: 'left', backgroundColor: 'white', borderRadius: '6px', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
                >
                  <Plus size={18} style={{ color: '#22c55e', flexShrink: 0 }} />
                  <span style={{ color: '#16a34a', fontWeight: 500 }}>New chat</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <nav style={{
          flex: 1,
          display: 'flex',
          padding: '0px 16px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '4px',
          alignSelf: 'stretch'
        }}>
          <ul style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            alignItems: 'flex-start',
            alignSelf: 'stretch'
          }}>
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItemId === item.id;
              
              return (
                <li key={item.id} style={{ width: '100%' }}>
                  <button
                    onClick={() => handleNavItemClick(item.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px',
                      borderRadius: '6px',
                      transition: 'all 0.2s',
                      alignSelf: 'stretch',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: isActive ? '#dcfce7' : 'transparent',
                      borderLeft: isActive ? '4px solid #22c55e' : '4px solid transparent',
                      color: isActive ? '#15803d' : '#374151'
                    }}
                  >
                    <IconComponent 
                      size={20} 
                      style={{ color: isActive ? '#16a34a' : '#6b7280' }} 
                    />
                    
                    <span style={{
                      fontWeight: 500,
                      transition: 'all 0.3s',
                      opacity: isCollapsed ? 0 : 1,
                      width: isCollapsed ? 0 : 'auto',
                      overflow: 'hidden',
                      flex: 1
                    }}>
                      {item.label}
                    </span>

                    {item.hasDropdown && !isCollapsed && (
                      <ChevronDown 
                        size={16} 
                        style={{
                          color: '#9ca3af',
                          transition: 'transform 0.2s',
                          transform: isHistoryOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                      />
                    )}
                  </button>

                  {item.id === 'history' && isHistoryOpen && !isCollapsed && (
                    <div style={{ marginLeft: '24px', marginTop: '4px', transition: 'all 0.3s' }}>
                      <ul style={{ gap: '4px', borderLeft: '1px solid #e5e7eb', paddingLeft: '16px' }}>
                        <li>
                          <button style={{ width: '100%', textAlign: 'left', padding: '8px 12px', fontSize: '14px', color: '#6b7280', backgroundColor: 'transparent', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s' }}>
                            Recent Conversations
                          </button>
                        </li>
                        <li>
                          <button style={{ width: '100%', textAlign: 'left', padding: '8px 12px', fontSize: '14px', color: '#6b7280', backgroundColor: 'transparent', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s' }}>
                            Last Week
                          </button>
                        </li>
                        <li>
                          <button style={{ width: '100%', textAlign: 'left', padding: '8px 12px', fontSize: '14px', color: '#6b7280', backgroundColor: 'transparent', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s' }}>
                            Archive
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      
      {renderMainContent()}
    </div>
  );
};

export default function ZaraPage() {
  return <Sidebar />;
}