import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NordCraft() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white p-6 space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Velkommen til NordCraft</h1>
        <p className="text-lg">Minecraft survival server med shops, warps og regionsystem</p>
        <div className="text-xl font-mono bg-neutral-800 p-2 rounded">IP: play.nordcraft.no</div>
        <Button className="mt-2">Bli med nå</Button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Ranks</h2>
        <Card>
          <CardContent className="p-4 space-y-1">
            <p>👤 Default – Starterank</p>
            <p>🛠️ CP – Community Player</p>
            <p>🏗️ Builder – Kan bygge spawn</p>
            <p>🛡️ Moderator – Admin-ansvar</p>
            <p>⚙️ Admin – Full tilgang</p>
            <p>👑 Owner – Servereier</p>
          </CardContent>
        </Card>
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
        <Card>
          <CardContent className="p-4 space-y-1">
            <p>🪓 Netherite Upgrade – 10000</p>
            <p>🎨 Smithing Templates – 5000+</p>
            <p>⚔️ Golden Chestplate – 150</p>
            <p>🐴 Horse Armor – 100–300</p>
          </CardContent>
        </Card>
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