// const customComponent = {
//   p({ ...props }) {
//     if (typeof props.children[0] === "object") {
//       const element: any = props.children[0];
//       return (
//         { ...element }
//       )
//     }
//     return (
//       <PostContentP>
//         {props.children}
//       </PostContentP>
//     )
//   }, 
//   a({ ...props }) {
//     return (
//       <Link href={props.href}>
//         {props.children}
//       </Link>
//     )
//   },
//   h1({ ...props }) {
//     return (
//       <PostContentH1 id={props.children}>
//         {props.children}
//       </PostContentH1>
//     )
//   },
  // h2({ ...props }) {
  //   return (
  //     <PostContentH2 id={props.children}>
  //       {props.children}
  //     </PostContentH2>
  //   )
  // },
//   h3({ ...props }) {
//     return (
//       <PostContentH3 id={props.children}>
//         {props.children}
//       </PostContentH3>
//     )
//   },
//   img({...props}) {
//     return (
//       <PostContentImg
//         src={props.src}
//         alt={props.alt}
//       />
//     )
//   },
  // code({ ...props }) {
  //   const match = /language-(\w+)/.exec(props.className) as RegExpExecArray;
  //   if (!match) {
  //     return (
  //       <code className='small-code'>
  //         {String(props.children).replace(/\n$/, '')}
  //       </code>
  //     )
  //   }
  //   return (
  //     <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag="div" {...props}>
  //       {String(props.children).replace(/\n$/, '')}
  //     </SyntaxHighlighter>
  //   )
  // }
// }