export default function AlbumComponent({album}) {
    return (
        <div>
           <li>{album.id} - {album.title}</li>
        </div>
    )
}