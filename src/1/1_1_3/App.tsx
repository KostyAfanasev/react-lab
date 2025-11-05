// Компонент Profile начинается с заглавной буквы
function Profile() {
  return (
    <img
      src="AlanHart.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
    </section>
  );
}