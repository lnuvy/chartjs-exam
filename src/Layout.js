function Layout(props) {

  const {children} = props;
  const layoutStyle = {
    display: 'grid',
    gridTemplateCulumns: '1fr 1fr',
    border: '10px solid rgba(232, 232, 232, 0.7)'
  };

  const myChildren = children.map((child) => {
    const childs = {
      border: "3px solid rgba(0, 0, 225, 0.8)",
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