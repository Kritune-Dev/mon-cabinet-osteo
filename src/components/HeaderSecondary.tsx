export default function HeaderSecondary() {
  return (
    <section
      aria-label="Présentation ostéopathe et lieu"
      className="mt-[64px] md:mt-[72px] bg-card flex flex-col md:flex-row items-center max-w-5xl mx-auto rounded-lg shadow-md overflow-hidden"
    >
      {/* Image côté gauche (ou en fond) */}
      <div className="w-full md:w-1/2 h-64 md:h-80 relative">
        <img
          src="/images/profil.jpg"
          alt="Corentin Bacconnais, ostéopathe"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Texte présentation */}
      <div className="p-6 md:p-8 md:w-1/2 text-primary">
        <h1 className="text-3xl font-semibold mb-2">Corentin Bacconnais, Ostéopathe</h1>
        <p className="text-lg mb-4">Cabinet situé au Temple de Bretagne (44360)</p>
        <p>Praticien diplômé, spécialisé en accompagnement sportif et santé globale. Je vous accueille dans un cadre chaleureux pour vous aider à retrouver bien-être et mobilité.</p>
      </div>
    </section>
  )
}
