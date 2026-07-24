import Link from "next/link";

const CTA = ({ name = "Enter", link }: { name?: string; link: string }) => {

  return (
    <div className="cta">
      <Link href={link} legacyBehavior>
        <a className="cta_link">{name}</a>
      </Link>
    </div>
  );
};

export default CTA;
