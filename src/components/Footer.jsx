import { profile } from '../data/portfolio';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="container">
        © {CURRENT_YEAR} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
