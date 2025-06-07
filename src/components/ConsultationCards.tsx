'use client'

const cards = [
	{
		id: 'consultation-adulte',
		label: 'Adultes',
		description:
			'Gestion des douleurs, troubles musculo-squelettiques, stress, troubles digestifs…',
		href: '/adulte',
		aria: "Adultes, gestion des douleurs, troubles musculo-squelettiques, stress, troubles digestifs…",
	},
	{
		id: 'consultation-sportif',
		label: 'Sportifs',
		description:
			'Préparation, récupération, prévention des blessures, suivi personnalisé.',
		href: '/sportif',
		aria: "Sportifs, préparation, récupération, prévention des blessures, suivi personnalisé",
	},
	{
		id: 'consultation-femme-enceinte',
		label: 'Femmes enceintes',
		description:
			"Accompagnement de la grossesse, soulagement des douleurs lombaires, préparation à l'accouchement.",
		href: '/femme-enceinte',
		aria: "Femmes enceintes, accompagnement de la grossesse, soulagement des douleurs lombaires, préparation à l'accouchement",
	},
	{
		id: 'consultation-enfants',
		label: 'Enfants & nourrissons',
		description:
			'Suivi du développement, troubles du sommeil, coliques, plagiocéphalie…',
		href: '/enfants',
		aria: "Enfants et nourrissons, suivi du développement, troubles du sommeil, coliques, plagiocéphalie…",
	},
]

export default function ConsultationCards() {
	return (
		<ul
			className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2"
			aria-label="Types de patients"
		>
			{cards.map((card) => (
				<li key={card.id} id={card.id} className="group">
					<a
						href={card.href}
						aria-label={card.aria}
						className=" bg-[#F5E9E3] rounded-lg p-4 shadow flex flex-col items-start cursor-pointer transition-transform duration-150 hover:scale-[1.025] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#E08A3D]"
						tabIndex={0}
					>
						<span
							className="font-bold text-lg mb-1"
							style={{ color: '#1a120b' }}
						>
							{card.label}
						</span>
						<span className="text-sm block">{card.description}</span>
					</a>
				</li>
			))}
		</ul>
	)
}
