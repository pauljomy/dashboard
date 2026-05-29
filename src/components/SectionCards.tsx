import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { TrendingUp, TrendingDown } from "lucide-react";

const SectionCards = () => {
  const cards = [
    {
      title: "Total Revenue",
      value: "$1,250.00",
      trend: "up",
      change: "+12.5%",
      sub: "Trending up this month",
    },
    {
      title: "New Customers",
      value: "1,234",
      trend: "down",
      change: "-20%",
      sub: "Down 20 this period",
    },
    {
      title: "Active Accounts",
      value: "45,678",
      trend: "up",
      change: "+12.5%",
      sub: "Strong user retention",
    },
    {
      title: "Growth Rate",
      value: "4.5%",
      trend: "up",
      change: "+4.5%",
      sub: "Steady performance",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 px-4">
      {cards.map((card) => (
        <Card>
          <CardHeader key={card.title}>
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              {card.title}
              <Badge variant="outline">{card.change}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{card.value}</p>
          </CardContent>
          <CardFooter className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">{card.sub}</span>
            <div>
              {card.trend == "up" ? (
                <TrendingUp size={16} />
              ) : (
                <TrendingDown size={16} />
              )}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SectionCards;
