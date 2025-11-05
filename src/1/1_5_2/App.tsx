import { getImageUrl } from "./util";

export type Person = {
  name: string;
  imageId: string;
};

// Изменен компонент Avatar, чтобы он передавал 's' или 'b' в зависимости от значения size
function Avatar({ person, size }: { person: Person; size: number }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, size < 90 ? "s" : "b")}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "GregorioYZara",
      }}
    />
  );
}
