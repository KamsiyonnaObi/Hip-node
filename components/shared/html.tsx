import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";

function replaceNode() {}
function html(html: any, opts = {}) {
  return parse(DOMPurify.sanitize(html), {
    ...{
      replace: replaceNode,
    },
    ...opts,
  });
}

export default function Html({ htmltext }: { htmltext: string }) {
  return <>{html(htmltext)}</>;
}
