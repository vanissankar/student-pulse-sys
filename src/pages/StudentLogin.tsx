import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Users, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const usersRef = collection(db, "users");
      const q = query(
        usersRef,
        where("email", "==", email),
        where("roll", "==", roll),
        where("role", "==", "student")
      );
      
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const studentData = querySnapshot.docs[0].data();
        // Store student data in sessionStorage for the session
        sessionStorage.setItem("studentData", JSON.stringify({
          uid: querySnapshot.docs[0].id,
          ...studentData
        }));
        toast.success("Login successful!");
        navigate("/student-dashboard");
      } else {
        toast.error("Invalid credentials. Please check your email and roll number.");
      }
    } catch (error: any) {
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/10 via-background to-primary/10 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-secondary/10 p-3 rounded-full">
              <Users className="h-8 w-8 text-secondary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Student Login</CardTitle>
          <CardDescription>
            Access your attendance records and timetable
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="student@school.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="roll">Roll Number</Label>
              <Input
                id="roll"
                type="text"
                placeholder="12"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <Button
            variant="ghost"
            className="w-full mt-4"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentLogin;
