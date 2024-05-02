-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "telephone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RevenuMensuelle" (
    "id" SERIAL NOT NULL,
    "montant" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "idUtilisateur" INTEGER NOT NULL,

    CONSTRAINT "RevenuMensuelle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Depenses" (
    "id" SERIAL NOT NULL,
    "montant" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "heure" TIMESTAMP(3) NOT NULL,
    "idUtilisateur" INTEGER NOT NULL,
    "idCategories" INTEGER NOT NULL,

    CONSTRAINT "Depenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "dimeEtOffr" TEXT NOT NULL,
    "nourritures" TEXT NOT NULL,
    "logements" TEXT NOT NULL,
    "transports" TEXT NOT NULL,
    "vetements" TEXT NOT NULL,
    "educations" TEXT NOT NULL,
    "dettes" TEXT NOT NULL,
    "loisirEtAutres" TEXT NOT NULL,
    "epargne" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_telephone_key" ON "Utilisateur"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_password_key" ON "Utilisateur"("password");

-- AddForeignKey
ALTER TABLE "RevenuMensuelle" ADD CONSTRAINT "RevenuMensuelle_idUtilisateur_fkey" FOREIGN KEY ("idUtilisateur") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depenses" ADD CONSTRAINT "Depenses_idUtilisateur_fkey" FOREIGN KEY ("idUtilisateur") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depenses" ADD CONSTRAINT "Depenses_idCategories_fkey" FOREIGN KEY ("idCategories") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
