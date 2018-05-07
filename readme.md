# Capstone Proposal

## Problem Statement

Do you ever walk into a wine shop and feel overwhelmed by the selection in front of you? You're not alone. Everyone has their own unique taste in wine and, while you may gravitate to a particular varietal, the process of finding wines that you love can ultimately end up being a process of guess and check. Wine lovers need a way to catalogue the wines they've had, rate them, and find wines that other people with preferences similar to theirs have enjoyed.

## How will MyCellar solve the problem?

MyCellar is a mobile app that allows users to create a virtual personal "cellar" that keeps a record of the wines the user has previously had. The user can import photos of their bottles and give ratings to reference in the future. As more and more users adopt the app, users will be able to receive recommendations based on their virtual "palate", as well as share experiences with friends in a socially interactive manner.

## Map the User experience

Users will login using either email & password or using their preferred social media platform. They'll then be brought into their cellar, where they will be able to view their previous wines and ratings, as well as have an option to upload a new bottle. If they select this option, they will then have an option to upload a photo of their bottle, with which MyCellar vill use Google Vision to provide a prefilled form with their wine. The user can then edit this information and submit the wine to their cellar, where they will then be given the option to rate the wine.

## What technologies do you plan to use?

I plan to develop the front-end of MyCellar in React Native, using Redux to manage state and React Native Navigation for routing. The back-end will be done with NodeJS and PostgreSQL 