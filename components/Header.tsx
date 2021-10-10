import Link from "next/link"; // Routing
import styles from "@styles/components/Layout.module.scss"; // Styles
import { useWalletContext } from "hooks/useWalletContext";

export default function Header() {
  const { connectWallet, isConnected, disconnectWallet, displayName } =
    useWalletContext();

  return (
    <div className={styles.header}>
      {/* Main logo */}
      <div className={styles.header__logo}>
        <Link href="/">
          <a className="flex">
            <img src="/genesis-icon.png" className="h-8 mr-4"></img> Genesis
            Project (for Loot)
          </a>
        </Link>
      </div>
      <div className={styles.header__account}>
        {isConnected && (
          <span>
            {displayName}{" "}
            <a
              className={styles.header__links_active}
              onClick={disconnectWallet}
            >
              [ disconnect ]
            </a>
          </span>
        )}
        {!isConnected && (
          <button className={styles.header__button} onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}
