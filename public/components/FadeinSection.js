export function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: `fade-in-section ${isVisible ? 'is-visible' : ''}`,
    ref: domRef
  }, props.children);
}