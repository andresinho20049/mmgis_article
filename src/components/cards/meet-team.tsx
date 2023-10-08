import CardsSocialMediaComponent, { ICardsSocialMediaProps } from "./cards-social-media"


const profiles_data: ICardsSocialMediaProps[] = [
    {
        image_path: '/team/wellbinho.jpg',
        name: "Welber Costa",
        sub: "Data analytics",
        social_media: [
            {
                name: 'github',
                url: 'https://github.com/'
            },
            {
                name: 'twitter',
            },
            {
                name: 'linkedin'
            }
        ]
    },
    {
        image_path: '/team/andrey.jpg',
        name: "Andrey Cadmo",
        sub: "Developer frontend",
        social_media: [
            {
                name: 'github',
                url: 'https://github.com/'
            },
            {
                name: 'twitter',
            },
            {
                name: 'linkedin'
            }
        ]
    },
    {
        image_path: '/team/andresinho.jpg',
        name: "André Carlos",
        sub: "Developer",
        social_media: [
            {
                name: 'github',
                url: 'https://github.com/'
            },
            {
                name: 'youtube',
            },
            {
                name: 'linkedin'
            }
        ]
    },
    {
        image_path: '/team/gui.jpg',
        name: "Guilherme Paula",
        sub: "Research",
        social_media: [
            {
                name: 'github',
                url: 'https://github.com/'
            },
            {
                name: 'twitter',
            },
            {
                name: 'linkedin'
            }
        ]
    },
]

export const MeetTeamsComponent = () => {
    return (
        
        <section className="flex flex-col text-center p-6">
        <h2 className="mb-32 text-3xl font-bold text-white">
            Meet the <u className="text-primary dark:text-primary-500">team</u>
        </h2>

        <div className="grid gap-x-4 md:grid-cols-4 lg:gap-x-12">
            {
                profiles_data.map((profile) => {
                    return (
                        <CardsSocialMediaComponent 
                            image_path={profile.image_path}
                            name={profile.name}
                            sub={profile.sub}
                            social_media={profile.social_media}
                        />
                    )
                })
            }
        </div>
    </section>
    )
}