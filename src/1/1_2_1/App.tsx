// Компонент Profile импортируется по имени из Profile.tsx, Gallery - по умолчанию из Gallery.tsx
import Gallery from "./Gallery";
import { Profile } from "./Profile";

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}
