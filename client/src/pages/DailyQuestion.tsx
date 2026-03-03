import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Flame, CheckCircle2, Play, AlertCircle } from "lucide-react";

export default function DailyQuestion() {
  return (
    <div className="py-10 animate-in fade-in duration-500 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Daily Challenge</h1>
          <p className="text-muted-foreground mt-2">Solve this to maintain your streak and earn bonus XP.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm font-medium">14:23:05 left</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span className="font-bold text-sm">14</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-border/50 shadow-sm">
            <CardHeader className="pb-3 border-b border-border/40 bg-card/50">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Problem Info</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Difficulty</span>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-none shadow-none">Medium</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Reward</span>
                <span className="font-bold text-primary">+50 XP</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Topic</span>
                <Badge variant="outline">Dynamic Programming</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Success Rate</span>
                <span className="text-sm font-medium">68.4%</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 shadow-sm bg-gradient-to-br from-card to-background">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Completing daily questions consecutively builds your streak. A 7-day streak grants a <span className="font-semibold text-foreground">1.5x XP multiplier</span>!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border/50 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-serif">Maximum Subarray Sum</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-foreground/90">
              <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                <p>
                  Given an integer array <code>nums</code>, find the subarray with the largest sum, and return <em>its sum</em>.
                </p>
                
                <h4 className="text-lg font-serif font-bold mt-6 mb-2">Example 1:</h4>
                <pre className="bg-muted/50 p-4 rounded-lg border border-border/50 text-sm font-mono overflow-x-auto">
<span className="text-muted-foreground">Input:</span> nums = [-2,1,-3,4,-1,2,1,-5,4]
<span className="text-muted-foreground">Output:</span> 6
<span className="text-muted-foreground">Explanation:</span> The subarray [4,-1,2,1] has the largest sum 6.
                </pre>

                <h4 className="text-lg font-serif font-bold mt-6 mb-2">Example 2:</h4>
                <pre className="bg-muted/50 p-4 rounded-lg border border-border/50 text-sm font-mono overflow-x-auto">
<span className="text-muted-foreground">Input:</span> nums = [1]
<span className="text-muted-foreground">Output:</span> 1
<span className="text-muted-foreground">Explanation:</span> The subarray [1] has the largest sum 1.
                </pre>

                <h4 className="text-lg font-serif font-bold mt-6 mb-2">Constraints:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
                  <li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-slate-900 text-slate-200 px-4 py-2 flex justify-between items-center text-sm font-mono border-b border-slate-800">
              <div className="flex items-center gap-4">
                <span>Solution.js</span>
                <span className="px-2 py-0.5 bg-slate-800 rounded text-xs">JavaScript</span>
              </div>
            </div>
            <div className="relative flex-1 bg-slate-950">
              <div className="absolute left-0 top-0 bottom-0 w-10 bg-slate-900 border-r border-slate-800 text-slate-500 font-mono text-xs text-right pr-2 pt-4 select-none">
                1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8
              </div>
              <Textarea 
                className="w-full h-64 bg-transparent border-none text-slate-300 font-mono text-sm resize-none focus-visible:ring-0 rounded-none pl-12 pt-4"
                defaultValue={`/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Write your solution here
    
};`}
              />
            </div>
            <CardFooter className="bg-card py-4 border-t border-border flex justify-between">
              <Button variant="outline" className="gap-2">
                <Play className="w-4 h-4" /> Run Tests
              </Button>
              <Button className="bg-primary hover:bg-secondary text-primary-foreground gap-2">
                <CheckCircle2 className="w-4 h-4" /> Submit Solution
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
