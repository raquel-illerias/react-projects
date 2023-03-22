export interface PersonaCardProps {
    persona: Persona;
    personaIndex: number;
}

export interface Persona {
    id:       number;
    name:     string;
    location: string;
    avatar:   string;
    price:    string;
    smallOk:  boolean;
    mediumOk: boolean;
    largeOk:  boolean;
}
