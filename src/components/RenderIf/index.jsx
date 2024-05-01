// eslint-disable-next-line react/prop-types
const Index = ({ children, condition, renderElse = "" }) => {
  if (condition) return <>{children}</>;
  else return <>{renderElse}</>;
};

export default Index;

// {theme ? 'dark' : 'light'}

{
  /* <RenderIf condition={theme==='dark'} renderElse={'light'}>
  <span>dark</span>
</RenderIf> */
}
