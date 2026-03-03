import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Trophy, Users } from "lucide-react";

export default function Contests() {
  return (
    <div className="py-10 space-y-12 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Contests</h1>
          <p className="text-muted-foreground mt-2 text-lg">Test your skills in timed competitions and climb the ranks.</p>
        </div>
      </div>

      {/* Ongoing/Upcoming Highlight */}
      <Card className="border-primary/30 shadow-lg bg-gradient-to-r from-card to-background relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <CardContent className="p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl shrink-0 rotate-3 transition-transform hover:rotate-0 duration-300">
            <Trophy className="w-16 h-16 text-white drop-shadow-md" />
          </div>
          <div className="flex-1 text-center md:text-left space-y-4">
            <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-none px-3 py-1 font-semibold uppercase tracking-wider text-xs animate-pulse">
              Registration Open
            </Badge>
            <h2 className="text-3xl font-serif font-bold text-foreground">Weekly Contest 46</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Four algorithmic challenges ranging from easy to hard. Top performers earn massive XP and exclusive profile badges.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium pt-2">
              <div className="flex items-center gap-1.5 text-foreground/80 bg-background/50 px-3 py-1.5 rounded-md border border-border/50">
                <Calendar className="w-4 h-4 text-primary" /> Sat, Oct 14
              </div>
              <div className="flex items-center gap-1.5 text-foreground/80 bg-background/50 px-3 py-1.5 rounded-md border border-border/50">
                <Clock className="w-4 h-4 text-primary" /> 2:00 PM - 4:00 PM
              </div>
              <div className="flex items-center gap-1.5 text-foreground/80 bg-background/50 px-3 py-1.5 rounded-md border border-border/50">
                <Users className="w-4 h-4 text-primary" /> 142 Registered
              </div>
            </div>
            <div className="pt-4">
              <Button size="lg" className="bg-primary hover:bg-secondary text-white rounded-full px-8 shadow-md">
                Register Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Past Contests Grid */}
      <div>
        <h3 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
          Past Contests
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 45, date: "Oct 7, 2023", participants: 210, difficulty: "Medium", completed: true, score: "4/4" },
            { id: 44, date: "Sep 30, 2023", participants: 185, difficulty: "Hard", completed: true, score: "2/4" },
            { id: 43, date: "Sep 23, 2023", participants: 195, difficulty: "Medium", completed: false, score: "Did not participate" },
            { id: 42, date: "Sep 16, 2023", participants: 220, difficulty: "Easy", completed: true, score: "4/4" },
            { id: 41, date: "Sep 9, 2023", participants: 205, difficulty: "Medium", completed: true, score: "3/4" },
            { id: 40, date: "Sep 2, 2023", participants: 230, difficulty: "Hard", completed: false, score: "Did not participate" },
          ].map((contest) => (
            <Card key={contest.id} className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300 group">
              <CardHeader className="pb-3 border-b border-border/30 bg-card/30">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Weekly Contest {contest.id}</CardTitle>
                    <CardDescription className="flex items-center gap-1.5 mt-1">
                      <Calendar className="w-3.5 h-3.5" /> {contest.date}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className={
                    contest.difficulty === 'Easy' ? 'text-green-600 border-green-200 bg-green-50' :
                    contest.difficulty === 'Medium' ? 'text-amber-600 border-amber-200 bg-amber-50' :
                    'text-red-600 border-red-200 bg-red-50'
                  }>
                    {contest.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4 pb-2 text-sm text-muted-foreground space-y-2">
                <div className="flex justify-between">
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> Participants</span>
                  <span className="font-medium text-foreground">{contest.participants}</span>
                </div>
                <div className="flex justify-between">
                  <span>Your Result</span>
                  <span className={`font-medium ${contest.completed ? 'text-primary' : 'text-muted-foreground'}`}>
                    {contest.score}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="ghost" className="w-full justify-between group-hover:text-primary transition-colors">
                  View Problems <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
