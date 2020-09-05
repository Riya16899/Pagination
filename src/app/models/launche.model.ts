import { Deserializable } from "./deserializable.model";

export class Launche implements Deserializable {
	flight_number: number;
	mission_name: string;
	launch_year: number;
	launch_date_local: Date;

	deserialize(input: any): this {
    	Object.assign(this, input);
    	return this;
  	}
}


// export class Launche {
// }
