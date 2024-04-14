export default async (interaction: any) => {
  setTimeout(() => {
    interaction.deleteReply().catch((e: any) => {
      console.error(e);
    });
  }, 3000);
}