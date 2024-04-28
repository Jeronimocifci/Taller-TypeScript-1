export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webUrl: string;
    image: string;
    title: any;
    network: any;
    url: any;

    constructor(id: number, name: string, channel: string, seasons: number, description: string, webUrl: string, image: string) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.webUrl = webUrl;
      this.image = image;
    }
  }