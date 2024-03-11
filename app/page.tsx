"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
const RootPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/home')
  }, []);
}

export default RootPage