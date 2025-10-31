# ---- Dependencies stage ----
FROM node:20-alpine AS deps
WORKDIR /app

# Kun kopier package.json og package-lock.json først (for caching)
COPY package*.json ./

# Installer alle dependencies inkl. devDependencies
RUN npm install

# ---- Builder stage ----
FROM deps AS builder
WORKDIR /app
COPY . .

# Build projektet
RUN npm run build

# ---- Production stage ----
FROM node:20-alpine AS runner
WORKDIR /app

# Kun kopier de nødvendige filer fra builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public

# Installer kun production dependencies
RUN npm install --omit=dev

CMD ["npm", "start"]

