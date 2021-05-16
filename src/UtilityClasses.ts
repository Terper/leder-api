import firebase from "firebase"

interface point {
  _lat: string,
  _long: string
}

export class Route{
  id: string
  author: any
  points: any
  name: string
  image: string
  description: any
  constructor(id: string, { author, points, name, description, image }: any) {
    this.id = id
    this.author = author
    if (points) {
      this.points = []
      points.forEach((point: point) => {
        this.points.push({lat : point._lat, lng : point._long})
      });
    } else {
      this.points = points
    }
    this.name = name
    this.description = description
    this.image = image
  }
}