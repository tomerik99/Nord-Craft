import React from "react";

export default function NordCraft() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white p-6 space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Velkommen til NordCraft</h1>
        <p className="text-lg">Minecraft survival server med shops, warps og regionsystem</p>
        <div className="text-xl font-mono bg-neutral-800 p-2 rounded">IP: play.nordcraft.no</div>
        <button className="bg-blue-600 px-4 py-2 rounded mt-2">Bli med nå</button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Ranks</h2>
        <ul className="space-y-1">
          <li>👤 Default – Starterank</li>
          <li>🛠️ CP – Community Player</li>
          <li>🏗️ Builder – Kan bygge spawn</li>
          <li>🛡️ Moderator – Admin-ansvar</li>
          <li>⚙️ Admin – Full tilgang</li>
          <li>👑 Owner – Servereier</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Regler</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>❌ Ikke grief</li>
          <li>❌ Ikke bruk X-ray</li>
          <li>✅ Vær hyggelig</li>
          <li>✅ Hjelp nye spillere</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Shop Items</h2>
        <ul className="space-y-1">
          <li>🪓 Netherite Upgrade – 10000</li>
          <li>🎨 Smithing Templates – 5000+</li>
          <li>⚔️ Golden Chestplate – 150</li>
          <li>🐴 Horse Armor – 100–300</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Warps & Regioner</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>/warp shop og /warp spawn</li>
          <li>Høyreklikk på warp-skilt for å teleportere</li>
          <li>/sethome, /home, /delhome støttes av alle ranks</li>
          <li>/autoregion beskytter området ditt mot eksplosjoner</li>
          <li>__global__ har vanilla-regler (eksplosjoner tillatt)</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-neutral-400 pt-8 border-t border-neutral-700">
        &copy; 2025 NordCraft. Drevet av Tom Erik.
      </footer>
    </main>
  );
}