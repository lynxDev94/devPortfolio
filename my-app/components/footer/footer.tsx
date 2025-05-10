import React from "react";

function FooterComponent() {
  return (
    <footer className="z-55 fixed left-0 top-0 flex h-screen items-center justify-between w-15 flex-col border-r border-gray-400/15 text-gray-400 bg-black text-sm">
      <p className="[writing-mode:sideways-lr] pt-10">&copy; Richie-Stan.</p>
      <nav aria-label="footer">
        <ul className="">
          <li className="[writing-mode:sideways-lr] pb-5">
            <a href="/privacy">Privacy</a>
          </li>
          <li className="[writing-mode:sideways-lr] pb-5">
            <a href="/terms">Terms</a>
          </li>
          <li className="[writing-mode:sideways-lr] pb-5">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default FooterComponent;
