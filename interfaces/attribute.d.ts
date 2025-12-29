import React from "react";

export interface Attribute {
  name: string;
  level: number;
  category: "language" | "framework" | "database" | "devops" | "concept" | string;
  type: "core" | "secondary" | string;
}
