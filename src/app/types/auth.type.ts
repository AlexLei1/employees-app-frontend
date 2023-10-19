import { NextPage } from 'next'
import {ReactNode} from 'react'
export type TypeRoles = {isOnlyUser?: boolean }
export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles
export type TypeComponentAuthFields = {children: ReactNode, Component: TypeRoles }