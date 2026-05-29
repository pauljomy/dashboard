import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardAction,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cards } from "@/config/cards";

import { Badge } from "@/components/ui/badge";

import { TrendingUp, TrendingDown } from "lucide-react";

const SectionCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 lg:px-6 *:data-[slot=card]:shadow-xs *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
      {cards.map((card) => (
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>{card.title}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]:text-3xl">
              {card.value}
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                {card.trend === "up" ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                {card.change}
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="border-0 text-sm flex flex-col gap-2 items-start">
            <div className="font-semibold flex items-center gap-2">
              <div>{card.boldSub}</div>
              <div>
                {card.trend === "up" ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
              </div>
            </div>
            <div className="text-muted-foreground ">{card.sub}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SectionCards;
