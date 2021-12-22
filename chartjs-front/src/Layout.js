function Layout(props) {

  const index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const { children } = props;
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
    <div style={layoutStyle} key={index.map((i) => i)}>
      {myChildren}
    </div>
  );
}
export default Layout;