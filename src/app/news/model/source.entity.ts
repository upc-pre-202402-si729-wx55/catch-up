/**
 * Source entity
 * @class Source
 * @description
 * This class represents a source entity.
 * It contains the following properties:
 * @property id: string - The source ID.
 * @property name: string - The source name.
 * @property url: string - The source URL.
 * @property urlToLogo: string - The source logo URL.
 */
export class Source {
  id: string;
  name: string;
  url: string;
  urlToLogo: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.url = '';
    this.urlToLogo = '';
  }

}
