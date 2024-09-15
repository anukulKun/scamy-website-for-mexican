"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, DollarSign, ShieldCheck, Globe, HeadphonesIcon, Award } from "lucide-react"

export default function LottoLayout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Welcome to Lotto</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-blue-100 to-blue-200">
          <CardHeader>
            <Smartphone className="w-12 h-12 text-blue-500 mb-4" />
            <CardTitle>How to Play the Best of World Lotto?</CardTitle>
          </CardHeader>
          <CardContent>
            Use Lotto&apos;s safe and secure services to enter lottery draws taking place all around the globe. You can now play international lotto games online from India. So, what are you waiting for? Write your own fortune! Pick your lucky numbers, you might just be the next jackpot winner!
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-100 to-yellow-200">
          <CardHeader>
            <DollarSign className="w-12 h-12 text-yellow-500 mb-4" />
            <CardTitle>How About Winning on Lotto?</CardTitle>
          </CardHeader>
          <CardContent>
            Lotto buys official lotto tickets on your behalf. Thanks to its local agents, you can find a proof of purchase on your account, just in time for the draws. Once you have won, small prizes will be directly credited to your account. Good to know: Lotto does not take ANY commission on prizes!
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-100 to-green-200">
          <CardHeader>
            <ShieldCheck className="w-12 h-12 text-green-500 mb-4" />
            <CardTitle>Why Should You Trust Lotto?</CardTitle>
          </CardHeader>
          <CardContent>
            We are offering top lottery messenger services, allowing lottery fans the chance to play their favourite lotto games online and win commission-free prizes. Whether you want to enter the popular American lotteries or prefer those lotto games with daily draws, you are in the right place.
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-100 to-red-200">
          <CardHeader>
            <Globe className="w-12 h-12 text-red-500 mb-4" />
            <CardTitle>Best World Lotto Games</CardTitle>
          </CardHeader>
          <CardContent>
            Find out all about the best of World Lotto! From American lotteries to European ones such as the EuroJackpot or the even greater EuroMillions, you can find the best of online lotteries here. Know it all: infos, results, news and try it for yourself!
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-100 to-purple-200">
          <CardHeader>
            <HeadphonesIcon className="w-12 h-12 text-purple-500 mb-4" />
            <CardTitle>Customer Service</CardTitle>
          </CardHeader>
          <CardContent>
            All money transactions made on Lotto are protected by GeoTrust 128-bit SSL security layer. This guarantees the safety of your investment. Moreover, your questions are promptly answered by the agents of our customer support center, which are available around the clock.
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-100 to-orange-200">
          <CardHeader>
            <Award className="w-12 h-12 text-orange-500 mb-4" />
            <CardTitle>The World&apos;s Biggest Jackpots</CardTitle>
          </CardHeader>
          <CardContent>
            Lotto introduces you to world lotto record jackpots such as the US$204 Crore reached in November 2022 by US Powerball, the US$160.2 Crore Mega Millions jackpot won on a single ticket in August 2023, or the €23 Lakh that the EuroMillions lottery awarded, not long ago, in June 2022!
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
