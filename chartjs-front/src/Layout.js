function Layout(props) {

  const { children } = props;
  
  console.log(children);

  const layoutStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    border: '1px solid rgba(232, 232, 232, 0.7)'
  };



  const myChildren = children.map((child) => {
    const childs = {
      border: "1px solid rgba(0, 0, 0, 1)",
    };
    return (
      <div style={childs}>
        {child}
      </div>
    )
  })

  return (
    <div style={layoutStyle}>
      {myChildren}
    </div>
  );
}
export default Layout;