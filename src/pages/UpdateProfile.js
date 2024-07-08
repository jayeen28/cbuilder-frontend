import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from '../components/Image';
import { toast } from '../components/Toaster';
import { useAuth } from '../context/AuthProvider';
import useFiles from '../hooks/useFiles';
import req from '../lib/req';

const UpdateProfile = () => {
    const [avatarDemoURL, setAvatarDemoURL] = useState('https://www.w3schools.com/howto/img_avatar.png');
    const [loading, setLoading] = useState(false);
    const { user, setToggleSession } = useAuth();
    const { uploadFile } = useFiles();
    const { fullname, dob, full_address, facebook_link } = user;
    const { handleSubmit, register } = useForm({ defaultValues: { fullname, dob, full_address, facebook_link } });

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const [avatar] = data.avatar;
            if (avatar) {
                const { data: { file_id } } = await uploadFile(avatar);
                data.avatar_file_id = file_id;
            }
            delete data.avatar;
            await req({ method: 'PATCH', uri: '/user/me', data })
        }
        catch (e) {
            toast('Something went wrong!', 'error');
        }
        finally {
            setToggleSession((prev) => !prev);
            setLoading(false);
        }
    };

    const onUpload = (e) => {
        const [file] = e.target.files;
        if (!file) return;
        setAvatarDemoURL(URL.createObjectURL(file));
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ height: '100px', width: '100px', border: '1px solid', borderRadius: '100%', position: 'relative' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <label htmlFor='updateProfile' style={{ top: '40%', bottom: '50%' }}>
                            <Image
                                file_id={user.avatar_file_id}
                                url={avatarDemoURL} alt="Users avatar"
                                style={{ height: '100px', width: '100px', borderRadius: '100%' }}
                            />
                        </label>
                    </div>
                    <input
                        name='avatar'
                        id="updateProfile"
                        type="file"
                        accept='image/*'
                        hidden
                        {...register('avatar', {
                            onChange: onUpload
                        })}
                    />
                </div>
                <input type='text' placeholder='Full name' maxLength={255} required {...register('fullname')} />
                <input type='date' placeholder='Date of birth' required {...register('dob')} />
                <input type='text' placeholder='Full address' maxLength={300} required {...register('full_address')} />
                <input type='url' placeholder='Facebook' maxLength={255} required {...register('facebook_link')} />
                <button type='submit' disabled={loading}>Save</button>
            </form>
        </div>
    );
}

export default UpdateProfile;
