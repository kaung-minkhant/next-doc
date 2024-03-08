import Link from "next/link";

export default function LoginModelPage() {
  return (
    <div className="border border-blue-500 rounded-lg m-2 p-5">
      <p>Popup Login Page</p>
      <Link href={'/'}>close</Link>
    </div>
  );
}
