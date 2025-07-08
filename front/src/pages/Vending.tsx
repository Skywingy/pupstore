import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function VendingMachine() {
  const items = [
    { id: 1, name: "Water Bottle", emoji: "🥤" },
    { id: 2, name: "Matcha Can", emoji: "🍵" },
    { id: 3, name: "Mystery Seed", emoji: "🌱" },
    { id: 4, name: "Green Soda", emoji: "🥒" },
    { id: 5, name: "Eco-Chip", emoji: "🍃" },
    { id: 6, name: "Tiny Tree", emoji: "🌳" },
    { id: 7, name: "Greeney", emoji: "🥒🌳" },
    { id: 8, name: "Cucumber", emoji: "🍃" },
    { id: 9, name: "Tiny Forest", emoji: "🌳🌳🌳" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 font-mono">
        🧃 Indie Vending Machine
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {items.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-xl text-center">
                {item.emoji} {item.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              <p>Coming soon...</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
