/**
 * Formatadores de duração usados nos KPIs e na tabela do Histórico
 * (`lib/history-types.ts`): cobre todos os ramos de exibição.
 */
import { describe, expect, it } from "vitest";
import { formatHours, formatMinutes } from "@/lib/history-types";

describe("formatMinutes", () => {
  it("mostra traço para duração zero ou negativa", () => {
    expect(formatMinutes(0)).toBe("—");
    expect(formatMinutes(-5)).toBe("—");
  });

  it("mostra '< 1min' para frações de minuto", () => {
    expect(formatMinutes(0.4)).toBe("< 1min");
  });

  it("mostra só minutos abaixo de uma hora", () => {
    expect(formatMinutes(42)).toBe("42min");
  });

  it("mostra só horas quando não sobram minutos", () => {
    expect(formatMinutes(120)).toBe("2h");
  });

  it("mostra horas e minutos", () => {
    expect(formatMinutes(95)).toBe("1h 35min");
  });
});

describe("formatHours", () => {
  it("mostra traço quando não há valor", () => {
    expect(formatHours(null)).toBe("—");
  });

  it("mostra horas abaixo de 48 h", () => {
    expect(formatHours(12.34)).toBe("12.3h");
  });

  it("converte para dias a partir de 48 h", () => {
    expect(formatHours(72)).toBe("3.0 dias");
  });
});
