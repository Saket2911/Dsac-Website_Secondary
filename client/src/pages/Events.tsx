import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const upcomingEvents = [
  {
    id: 1,
    title: "Intro to System Design",
    date: "Oct 15, 2023",
    time: "4:00 PM - 6:00 PM",
    location: "Seminar Hall B / Virtual",
    type: "Workshop",
    attendees: 85,
    description: "Learn the fundamentals of designing scalable, distributed systems from industry experts.",
    isRegistered: false
  },
  {
    id: 2,
    title: "Hackathon Prep Session",
    date: "Oct 18, 2023",
    time: "5:30 PM - 7:30 PM",
    location: "Lab 304",
    type: "Meetup",
    attendees: 42,
    description: "Brainstorming and team formation for the upcoming state-level hackathon.",
    isRegistered: true
  },
  {
    id: 3,
    title: "Alumni AMA: Landing FAANG Internships",
    date: "Oct 22, 2023",
    time: "7:00 PM - 8:30 PM",
    location: "Virtual (Zoom)",
    type: "Talk",
    attendees: 156,
    description: "Q&A session with recent graduates who secured internships at top tech companies.",
    isRegistered: false
  }
];

export default function Events() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="py-10 space-y-10 animate-in fade-in duration-500">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Club Events</h1>
        <p className="text-muted-foreground mt-2 text-lg">Workshops, meetups, and talks to accelerate your learning.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Upcoming Events</h2>
          
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border-border/50 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-0 flex flex-col md:flex-row">
                  {/* Date Column */}
                  <div className="bg-card/50 md:border-r border-b md:border-b-0 border-border/50 p-6 flex md:flex-col items-center justify-center gap-2 md:gap-0 md:min-w-[140px] shrink-0">
                    <span className="text-sm font-bold text-primary uppercase">{event.date.split(',')[0].split(' ')[0]}</span>
                    <span className="text-3xl md:text-4xl font-bold text-foreground">{event.date.split(',')[0].split(' ')[1]}</span>
                  </div>
                  
                  {/* Content Column */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary mb-2">
                        {event.type}
                      </Badge>
                      {event.isRegistered && (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none">
                          Registered
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm font-medium text-foreground/80 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" /> {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" /> {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" /> {event.attendees} Attending
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <Button 
                        variant={event.isRegistered ? "outline" : "default"} 
                        className={!event.isRegistered ? "bg-primary hover:bg-secondary text-white" : ""}
                      >
                        {event.isRegistered ? "Cancel RSVP" : "RSVP Now"}
                      </Button>
                      <Button variant="ghost" size="icon" className="border border-border">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Card className="border-border/50 shadow-sm sticky top-24">
            <CardHeader>
              <CardTitle className="font-serif">Calendar</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center pb-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border-border/50"
                modifiers={{
                  event: [new Date(2023, 9, 15), new Date(2023, 9, 18), new Date(2023, 9, 22)]
                }}
                modifiersStyles={{
                  event: { fontWeight: 'bold', backgroundColor: 'hsl(var(--primary)/0.2)', color: 'hsl(var(--primary))' }
                }}
              />
            </CardContent>
            <div className="bg-card/50 p-4 border-t border-border/50 text-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-primary/20 border border-primary"></div>
                <span className="text-muted-foreground">Event Scheduled</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-foreground border border-foreground"></div>
                <span className="text-muted-foreground">Selected Date</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
