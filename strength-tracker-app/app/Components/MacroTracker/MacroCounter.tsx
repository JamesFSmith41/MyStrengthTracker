'use client'
import React from 'react'
import { ProtienTracker } from './ProtienTracker'
import { CarbTracker } from './CarbTracker';
import { FatTracker } from './FatTracker';
import type { User } from '@/app/lib/defintions';

export const MacroCounter: React.FC<{user : User}> = (props)  =>{
  const user = props.user;
  return (
    <div className="flex flex-row bg-uiElement p-10 border-slate-950 rounded-md min-w-10 w-4/6  m-10 items-center">
        <ProtienTracker user={user} />
        <CarbTracker user={user} />
        <FatTracker user={user} />
    </div>
  )
}


