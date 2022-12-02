import { cx } from "@utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        " px-8 py-5 lg:py-8 mx-auto xl:px-5  ",
        props.className
      )}>
      {props.children}
    </div>
  );
}
