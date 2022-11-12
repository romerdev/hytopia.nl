import Image from "next/image";
import Card from "./card";
import SocialIcon from "./social-icon";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 h-screen bg-gray-800">
      <div className="h-screen w-screen bg-sunlight-through-trees bg-center bg-no-repeat bg-cover brightness-50 absolute top-0 left-0"></div>
      
      <Card>
        <Image alt="Hytale Logo" src="/logo.webp" width="43" height="100" />
        <p className="my-8">
            Hytopia wordt een real-life ervaring in <a href="https://hytale.com/" target="_blank">Hytale</a>. Schrijf je in voor de nieuwsletter om op de hoogte te blijven.
        </p>
        <p className="text-emerald-700 text-sm outline p-3">Nieuwsletter volgt binnenkort..</p>
      </Card>

      <Card type="small">
        <h2 className="font-medium mb-3">Join de community</h2>
        <ul className="flex space-x-4">
          <li>
            <SocialIcon url="#" name="Discord">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
                <path fill="#fff" d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.2.38-.44.87-.6 1.25a18.27 18.27 0 0 0-5.5 0c-.16-.4-.4-.87-.6-1.25a.08.08 0 0 0-.09-.04 19.74 19.74 0 0 0-4.88 1.52.07.07 0 0 0-.04.03A20.26 20.26 0 0 0 .1 18.06a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.02c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.9.08.08 0 0 1 0-.12l.36-.3a.07.07 0 0 1 .08 0 14.2 14.2 0 0 0 12.06 0 .07.07 0 0 1 .08 0l.37.3a.08.08 0 0 1 0 .12 12.3 12.3 0 0 1-1.88.9.08.08 0 0 0-.04.1c.36.7.78 1.36 1.23 2a.08.08 0 0 0 .08.02c1.96-.6 3.95-1.52 6-3.03a.08.08 0 0 0 .04-.05c.5-5.18-.84-9.68-3.55-13.66a.06.06 0 0 0-.03-.03zM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z"/>
              </svg>
            </SocialIcon>
          </li>
          <li>
            <SocialIcon url="#" name="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
                <path fill="#fff" d="M23.95 4.57a10 10 0 0 1-2.82.78 4.96 4.96 0 0 0 2.16-2.73c-.95.56-2 .96-3.13 1.19a4.92 4.92 0 0 0-8.38 4.48A13.94 13.94 0 0 1 1.64 3.16a4.82 4.82 0 0 0-.67 2.48c0 1.7.87 3.21 2.2 4.1a4.9 4.9 0 0 1-2.24-.62v.06A4.92 4.92 0 0 0 4.88 14a5 5 0 0 1-2.21.09 4.94 4.94 0 0 0 4.6 3.42 9.87 9.87 0 0 1-6.1 2.1c-.39 0-.78-.02-1.17-.07a14 14 0 0 0 7.56 2.21c9.05 0 14-7.5 14-13.98 0-.21 0-.42-.02-.63A9.94 9.94 0 0 0 24 4.59z"/>
              </svg>
            </SocialIcon>
          </li>
        </ul>
      </Card>
    </main>
  )
}
