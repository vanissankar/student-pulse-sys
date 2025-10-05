import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-2xl">
              <GraduationCap className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Smart Attendance System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern attendance management for educational institutions with QR code scanning, 
            real-time tracking, and comprehensive reporting
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/50">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Admin Access</CardTitle>
              <CardDescription className="text-base">
                Manage students, timetables, and generate reports
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  Manage class timetables
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  Track student attendance
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  Generate monthly reports
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  View analytics and charts
                </li>
              </ul>
              <Button 
                className="w-full mt-4" 
                size="lg"
                onClick={() => navigate("/admin-login")}
              >
                Login as Admin
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-secondary/50">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Users className="h-10 w-10 text-secondary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Student Access</CardTitle>
              <CardDescription className="text-base">
                View timetable and mark attendance via QR code
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                  View personal timetable
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                  Mark attendance with QR
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                  Check attendance history
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                  View attendance percentage
                </li>
              </ul>
              <Button 
                className="w-full mt-4 bg-secondary hover:bg-secondary/90" 
                size="lg"
                onClick={() => navigate("/student-login")}
              >
                Login as Student
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
