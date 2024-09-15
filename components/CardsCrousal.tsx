"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'


interface Winner {
  name: string
  prize: string
  imageUrl: string
}

interface InfiniteScrollCardsProps {
  initialWinners?: Winner[]
}

const defaultWinners: Winner[] = [
  { name: "Deku", prize: "$1,000,000", imageUrl: "/images/233.jpg" },
  { name: "Jane ", prize: "$500,000", imageUrl: "/images/233.jpg"},
  { name: "Bobby", prize: "$250,000", imageUrl:  "/images/233.jpg"},
]

export default function InfiniteScrollCards({ initialWinners = defaultWinners }: InfiniteScrollCardsProps) {
  const [winners, setWinners] = useState<Winner[]>(initialWinners)

  useEffect(() => {
    const interval = setInterval(() => {
      setWinners(prevWinners => [...prevWinners, ...prevWinners])
    }, 2000) // every 5 seconds more winners are appended

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 md:py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Past Winners</h2>
        <div className="relative">
          <div className="marquee">
            <div className="marquee-content">
              {winners.map((winner, index) => (
                <div key={index} className="p-6 card bg-card rounded-lg shadow-md">
                  <Image
                    src={winner.imageUrl}
                    alt={`Winner ${winner.name}`}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-center text-card-foreground">{winner.name}</h3>
                  <p className="text-center text-card-foreground/80">Won {winner.prize}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .marquee-content {
          display: flex;
          width: 200%;
          animation: marquee 30s linear infinite;
        }

        .card {
          width: 200px;
          flex: 0 0 auto;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
